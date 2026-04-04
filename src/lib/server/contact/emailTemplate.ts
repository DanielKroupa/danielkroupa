import type { ContactFormData } from "#/lib/schemas/contactFormSchema";

type ContactEmailContent = {
  subject: string;
  text: string;
};

function readField(value: string | undefined, fallback = "Neuvedeno") {
  return value && value.trim().length > 0 ? value : fallback;
}

export function buildAdminInquiryEmail(
  payload: ContactFormData,
): ContactEmailContent {
  const subject = `Nová poptávka od ${payload.firstname} ${payload.lastname}`;
  const text = [
    "Nová poptávka z webového formuláře",
    "",
    `Jméno: ${payload.firstname} ${payload.lastname}`,
    `Email: ${payload.email}`,
    `Telefon: ${readField(payload.phone)}`,
    `Preferovaná služba: ${readField(payload.preferredService)}`,
    "",
    "Zpráva:",
    payload.messageBox,
    "",
  ].join("\n");

  return { subject, text };
}

export function buildClientConfirmationEmail(
  payload: ContactFormData,
): ContactEmailContent {
  const subject = "Potvrzení přijetí poptávky";
  const text = [
    `Dobrý den ${payload.firstname},`,
    "",
    "děkujeme za poptávku. Brzy se vám ozveme s dalšími informacemi.",
    "",
    "S pozdravem,",
    "Daniel Kroupa",
    "",
    "Shrnutí vaší poptávky:",
    `Preferovaná služba: ${readField(payload.preferredService)}`,
    `Telefon: ${readField(payload.phone)}`,
    "",
    "Vaše zpráva:",
    payload.messageBox,
    "",
  ].join("\n");

  return { subject, text };
}
