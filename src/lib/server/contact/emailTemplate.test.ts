import { describe, expect, it } from "vitest";

import {
  buildAdminInquiryEmail,
  buildClientConfirmationEmail,
} from "#/lib/server/contact/emailTemplate";

const payload = {
  firstname: "Daniel",
  lastname: "Kroupa",
  email: "daniel@example.com",
  phone: "+420123456789",
  preferredService: "Vývoj webu",
  messageBox: "Potřebuji nový firemní web.",
  consent: true,
};

describe("email templates", () => {
  it("builds admin email with summary", () => {
    const email = buildAdminInquiryEmail(payload);

    expect(email.subject).toContain("Nová poptávka");
    expect(email.text).toContain(payload.email);
    expect(email.text).toContain(payload.messageBox);
  });

  it("builds client confirmation email", () => {
    const email = buildClientConfirmationEmail(payload);

    expect(email.subject).toContain("Potvrzení");
    expect(email.text).toContain(payload.firstname);
    expect(email.text).toContain(payload.preferredService);
  });
});
