import { z } from "zod";

const E164_PHONE_REGEX = /^\+[1-9]\d{7,14}$/;

export const contactFormSchema = z.object({
  firstname: z
    .string()
    .trim()
    .nonempty({ message: "Vyplňte prosím své jméno" })
    .min(2, { message: "Jméno musí být alespoň 2 znaky dlouhé" })
    .max(20, { message: "Jméno musí být nejvýše 20 znaků dlouhé" })
    .regex(
      /^[a-zA-ZáčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/,
      "Jméno může obsahovat pouze písmena",
    ),
  lastname: z
    .string()
    .trim()
    .nonempty({ message: "Vyplňte prosím své příjmení" })
    .min(2, { message: "Příjmení musí být alespoň 2 znaky dlouhé" })
    .max(20, { message: "Příjmení musí být nejvýše 20 znaků dlouhé" })
    .regex(
      /^[a-zA-ZáčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/,
      "Příjmení může obsahovat pouze písmena",
    ),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Vyplňte prosím svůj email" })
    .email({ message: "Zadejte prosím platný email" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || E164_PHONE_REGEX.test(value),
      "Zadejte prosím platné telefonní číslo ve formátu +420123456789",
    ),
  preferredService: z.string().trim().max(100).optional(),
  messageBox: z
    .string()
    .trim()
    .nonempty({ message: "Vyplňte prosím svou zprávu" })
    .max(500, { message: "Zpráva může být nejvýše 500 znaků dlouhá" }),
  consent: z.boolean().refine((val) => val === true, {
    message:
      "Zatrhněte, prosím, souhlas s podmínkami zpracování osobních údajů",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Backwards-compatible aliases for existing imports.
export const contactformSchema = contactFormSchema;
export type contactFormData = ContactFormData;
