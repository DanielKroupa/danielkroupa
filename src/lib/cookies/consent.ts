export const COOKIE_CONSENT_STORAGE_KEY = "dk_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 183;

export interface CookieConsentCategories {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
}

export interface CookieConsentRecord {
  version: number;
  decidedAt: string;
  expiresAt: string;
  categories: CookieConsentCategories;
}

export function getDefaultCookieCategories(): CookieConsentCategories {
  return {
    necessary: true,
    analytics: false,
    preferences: false,
  };
}

export function createConsentRecord(
  categories: Pick<CookieConsentCategories, "analytics" | "preferences">,
  now = Date.now(),
): CookieConsentRecord {
  return {
    version: COOKIE_CONSENT_VERSION,
    decidedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + COOKIE_CONSENT_TTL_MS).toISOString(),
    categories: {
      necessary: true,
      analytics: categories.analytics,
      preferences: categories.preferences,
    },
  };
}

export function createAcceptAllRecord(now = Date.now()): CookieConsentRecord {
  return createConsentRecord({ analytics: true, preferences: true }, now);
}

export function createRejectAllRecord(now = Date.now()): CookieConsentRecord {
  return createConsentRecord({ analytics: false, preferences: false }, now);
}

export function serializeConsentRecord(record: CookieConsentRecord): string {
  return JSON.stringify(record);
}

export function parseConsentRecord(
  rawRecord: string | null,
  now = Date.now(),
): CookieConsentRecord | null {
  if (!rawRecord) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawRecord) as unknown;

    if (!isCookieConsentRecord(parsed)) {
      return null;
    }

    if (new Date(parsed.expiresAt).getTime() <= now) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function isCookieConsentRecord(value: unknown): value is CookieConsentRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  if (candidate.version !== COOKIE_CONSENT_VERSION) {
    return false;
  }

  if (!isIsoDate(candidate.decidedAt) || !isIsoDate(candidate.expiresAt)) {
    return false;
  }

  if (!candidate.categories || typeof candidate.categories !== "object") {
    return false;
  }

  const categories = candidate.categories as Record<string, unknown>;

  return (
    categories.necessary === true &&
    typeof categories.analytics === "boolean" &&
    typeof categories.preferences === "boolean"
  );
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  const parsedTime = new Date(value).getTime();
  return Number.isFinite(parsedTime);
}
