import { Resend } from "resend";

const MISSING_API_KEY_MESSAGE =
  "Chybí konfigurace RESEND_API_KEY pro odeslání e-mailu.";

const MISSING_ENV_MESSAGE =
  "Chybí konfigurace e-mailu. Nastavte CONTACT_FROM_EMAIL a CONTACT_TO_EMAIL.";

const INVALID_ENV_MESSAGE =
  "Konfigurace e-mailu je neplatná. Zkontrolujte CONTACT_FROM_EMAIL a CONTACT_TO_EMAIL.";

const INVALID_PRODUCTION_FROM_MESSAGE =
  "CONTACT_FROM_EMAIL nesmí být onboarding@resend.dev v produkčním prostředí.";

function readRequiredEmailEnv(name: "CONTACT_FROM_EMAIL" | "CONTACT_TO_EMAIL") {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(MISSING_ENV_MESSAGE);
  }

  return value;
}

function isEmailAddress(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(MISSING_API_KEY_MESSAGE);
  }

  return new Resend(apiKey);
}

export function getContactEmailConfig() {
  const from = readRequiredEmailEnv("CONTACT_FROM_EMAIL");
  const to = readRequiredEmailEnv("CONTACT_TO_EMAIL");

  if (!isEmailAddress(from) || !isEmailAddress(to)) {
    throw new Error(INVALID_ENV_MESSAGE);
  }

  if (
    process.env.NODE_ENV === "production" &&
    from.toLowerCase() === "onboarding@resend.dev"
  ) {
    throw new Error(INVALID_PRODUCTION_FROM_MESSAGE);
  }

  return { from, to };
}
