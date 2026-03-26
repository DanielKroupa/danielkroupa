import { afterEach, describe, expect, it } from "vitest";

import {
  getContactEmailConfig,
  getResendClient,
} from "#/lib/server/email/resendClient";

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("getResendClient", () => {
  it("throws when RESEND_API_KEY is missing", () => {
    delete process.env.RESEND_API_KEY;

    expect(() => getResendClient()).toThrow("RESEND_API_KEY");
  });
});

describe("getContactEmailConfig", () => {
  it("returns validated addresses from environment", () => {
    process.env.CONTACT_FROM_EMAIL = "noreply@example.com";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";
    process.env.NODE_ENV = "test";

    const config = getContactEmailConfig();

    expect(config).toEqual({
      from: "noreply@example.com",
      to: "owner@example.com",
    });
  });

  it("throws when required addresses are missing", () => {
    delete process.env.CONTACT_FROM_EMAIL;
    delete process.env.CONTACT_TO_EMAIL;

    expect(() => getContactEmailConfig()).toThrow("CONTACT_FROM_EMAIL");
  });

  it("throws when address format is invalid", () => {
    process.env.CONTACT_FROM_EMAIL = "bad-address";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";

    expect(() => getContactEmailConfig()).toThrow("neplatná");
  });

  it("throws for onboarding sender in production", () => {
    process.env.CONTACT_FROM_EMAIL = "onboarding@resend.dev";
    process.env.CONTACT_TO_EMAIL = "owner@example.com";
    process.env.NODE_ENV = "production";

    expect(() => getContactEmailConfig()).toThrow("onboarding@resend.dev");
  });
});
