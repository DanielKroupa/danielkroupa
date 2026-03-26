import { describe, expect, it, vi } from "vitest";

import { sendContactEmails } from "#/lib/server/contact/sendContactInquiry";

const payload = {
  firstname: "Daniel",
  lastname: "Kroupa",
  email: "client@example.com",
  phone: "+420123456789",
  preferredService: "Vývoj webu",
  messageBox: "Mám zájem o nový web.",
  consent: true,
};

describe("sendContactEmails", () => {
  it("returns success for both admin and client messages", async () => {
    const send = vi
      .fn()
      .mockResolvedValueOnce({ data: { id: "admin-1" }, error: null })
      .mockResolvedValueOnce({ data: { id: "client-1" }, error: null });

    const results = await sendContactEmails({
      resend: { emails: { send } },
      emailConfig: {
        from: "noreply@example.com",
        to: "owner@example.com",
      },
      data: payload,
    });

    expect(results).toEqual([
      {
        target: "admin",
        to: "owner@example.com",
        messageId: "admin-1",
        errorMessage: null,
        ok: true,
      },
      {
        target: "client",
        to: "client@example.com",
        messageId: "client-1",
        errorMessage: null,
        ok: true,
      },
    ]);

    expect(send).toHaveBeenCalledTimes(2);
  });

  it("returns failed admin result when resend responds with error", async () => {
    const send = vi
      .fn()
      .mockResolvedValueOnce({
        data: null,
        error: { message: "Mailbox unavailable" },
      })
      .mockResolvedValueOnce({ data: { id: "client-2" }, error: null });

    const results = await sendContactEmails({
      resend: { emails: { send } },
      emailConfig: {
        from: "noreply@example.com",
        to: "owner@example.com",
      },
      data: payload,
    });

    expect(results[0]).toEqual({
      target: "admin",
      to: "owner@example.com",
      messageId: null,
      errorMessage: "Mailbox unavailable",
      ok: false,
    });
    expect(results[1]?.ok).toBe(true);
  });

  it("marks response without message id as failed", async () => {
    const send = vi
      .fn()
      .mockResolvedValueOnce({ data: {}, error: null })
      .mockResolvedValueOnce({ data: { id: "client-3" }, error: null });

    const results = await sendContactEmails({
      resend: { emails: { send } },
      emailConfig: {
        from: "noreply@example.com",
        to: "owner@example.com",
      },
      data: payload,
    });

    expect(results[0]?.ok).toBe(false);
    expect(results[0]?.errorMessage).toContain("ID odeslané zprávy");
    expect(results[1]?.ok).toBe(true);
  });
});
