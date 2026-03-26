import { describe, expect, it } from "vitest";

import { contactFormSchema } from "#/lib/schemas/contactFormSchema";

const validPayload = {
  firstname: "Daniel",
  lastname: "Kroupa",
  email: "daniel@example.com",
  phone: "+420123456789",
  preferredService: "Vývoj webu",
  messageBox: "Mám zájem o nový web.",
  consent: true,
};

describe("contactFormSchema", () => {
  it("accepts a valid payload", () => {
    const result = contactFormSchema.safeParse(validPayload);

    expect(result.success).toBe(true);
  });

  it("accepts undefined phone and preferred service", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      phone: undefined,
      preferredService: undefined,
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid phone when provided", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      phone: "12345",
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toContain("telefonní číslo");
  });

  it("requires consent", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      consent: false,
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toEqual(["consent"]);
  });
});
