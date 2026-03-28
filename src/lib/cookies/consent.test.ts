import { describe, expect, it } from "vitest";

import {
  COOKIE_CONSENT_TTL_MS,
  createAcceptAllRecord,
  createConsentRecord,
  createRejectAllRecord,
  getDefaultCookieCategories,
  parseConsentRecord,
  serializeConsentRecord,
} from "#/lib/cookies/consent";

describe("cookie consent model", () => {
  it("uses default deny for optional categories", () => {
    expect(getDefaultCookieCategories()).toEqual({
      necessary: true,
      analytics: false,
      preferences: false,
    });
  });

  it("creates a consent record with six-month ttl", () => {
    const now = new Date("2026-03-28T00:00:00.000Z").getTime();
    const record = createConsentRecord(
      { analytics: true, preferences: false },
      now,
    );

    expect(record.categories).toEqual({
      necessary: true,
      analytics: true,
      preferences: false,
    });

    const expiresAt = new Date(record.expiresAt).getTime();
    expect(expiresAt - now).toBe(COOKIE_CONSENT_TTL_MS);
  });

  it("parses valid non-expired consent record", () => {
    const now = new Date("2026-03-28T00:00:00.000Z").getTime();
    const record = createAcceptAllRecord(now);
    const parsed = parseConsentRecord(
      serializeConsentRecord(record),
      now + 2000,
    );

    expect(parsed).toEqual(record);
  });

  it("rejects expired consent record", () => {
    const now = new Date("2026-03-28T00:00:00.000Z").getTime();
    const record = createRejectAllRecord(now);
    const parsed = parseConsentRecord(
      serializeConsentRecord(record),
      now + COOKIE_CONSENT_TTL_MS + 1,
    );

    expect(parsed).toBeNull();
  });

  it("rejects malformed payload", () => {
    const malformedRecord = JSON.stringify({
      version: 1,
      categories: {
        necessary: true,
        analytics: "yes",
        preferences: false,
      },
    });

    expect(parseConsentRecord(malformedRecord)).toBeNull();
    expect(parseConsentRecord("not-json")).toBeNull();
    expect(parseConsentRecord(null)).toBeNull();
  });
});
