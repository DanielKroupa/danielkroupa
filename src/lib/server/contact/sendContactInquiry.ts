import { createServerFn } from "@tanstack/react-start";

import { contactFormSchema } from "#/lib/schemas/contactFormSchema";
import {
  getContactEmailConfig,
  getResendClient,
} from "#/lib/server/email/resendClient";
import {
  buildAdminInquiryEmail,
  buildClientConfirmationEmail,
} from "#/lib/server/contact/emailTemplate";
import type { ContactFormData } from "#/lib/schemas/contactFormSchema";

type ResendSendResponse = {
  data?: {
    id?: string;
  } | null;
  error?: {
    message?: string;
  } | null;
};

type ResendEmailClient = {
  emails: {
    send: (payload: {
      from: string;
      to: string;
      subject: string;
      text: string;
      replyTo?: string;
    }) => Promise<ResendSendResponse>;
  };
};

type ContactEmailConfig = {
  from: string;
  to: string;
};

type DeliveryTarget = "admin" | "client";

export type ContactEmailDeliveryResult = {
  target: DeliveryTarget;
  to: string;
  messageId: string | null;
  errorMessage: string | null;
  ok: boolean;
};

type SendContactInquiryResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };

function formatError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Neznámá chyba";
}

function mapDeliveryResult(
  target: DeliveryTarget,
  to: string,
  response: ResendSendResponse,
): ContactEmailDeliveryResult {
  const messageId = response.data?.id ?? null;
  const responseErrorMessage = response.error?.message ?? null;

  if (responseErrorMessage) {
    return {
      target,
      to,
      messageId,
      errorMessage: responseErrorMessage,
      ok: false,
    };
  }

  if (!messageId) {
    return {
      target,
      to,
      messageId: null,
      errorMessage: "Resend nevrátil ID odeslané zprávy.",
      ok: false,
    };
  }

  return {
    target,
    to,
    messageId,
    errorMessage: null,
    ok: true,
  };
}

export async function sendContactEmails(params: {
  resend: ResendEmailClient;
  emailConfig: ContactEmailConfig;
  data: ContactFormData;
}) {
  const { resend, emailConfig, data } = params;
  const adminEmail = buildAdminInquiryEmail(data);
  const clientEmail = buildClientConfirmationEmail(data);

  const [adminResponse, clientResponse] = await Promise.all([
    resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: data.email,
      subject: adminEmail.subject,
      text: adminEmail.text,
    }),
    resend.emails.send({
      from: emailConfig.from,
      to: data.email,
      subject: clientEmail.subject,
      text: clientEmail.text,
    }),
  ]);

  return [
    mapDeliveryResult("admin", emailConfig.to, adminResponse),
    mapDeliveryResult("client", data.email, clientResponse),
  ] as const;
}

export const sendContactInquiry = createServerFn({ method: "POST" })
  .inputValidator(contactFormSchema)
  .handler(async ({ data }): Promise<SendContactInquiryResult> => {
    try {
      const resend = getResendClient();
      const emailConfig = getContactEmailConfig();
      const deliveryResults = await sendContactEmails({
        resend,
        emailConfig,
        data,
      });

      const failedResults = deliveryResults.filter((result) => !result.ok);

      if (failedResults.length > 0) {
        console.error("Kontaktni formular: odeslani emailu selhalo", {
          failedResults,
        });

        return {
          ok: false,
          message: "Odeslání se nepodařilo. Zkuste to prosím znovu za chvíli.",
        };
      }

      console.info("Kontaktni formular: emaily odeslany", {
        deliveryResults,
      });

      return { ok: true };
    } catch (error) {
      console.error("Kontaktni formular: neocekavana chyba pri odeslani", {
        error: formatError(error),
      });

      return {
        ok: false,
        message: "Odeslání se nepodařilo. Zkuste to prosím znovu za chvíli.",
      };
    }
  });
