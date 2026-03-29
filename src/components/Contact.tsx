import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SERVICE_DEFINITIONS } from "#/utils/services";
import { usePrivacyOverlay } from "#/hooks/usePrivacyOverlay";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactInquiry } from "#/lib/server/contact/sendContactInquiry";

import {
  type ContactFormData,
  contactFormSchema,
} from "#/lib/schemas/contactFormSchema";

function InputError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-red-500">{message}</p>;
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { openPrivacy } = usePrivacyOverlay();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: undefined,
      preferredService: undefined,
      messageBox: "",
      consent: false,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = form;

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      const result = await sendContactInquiry({ data: values });

      if (!result.ok) {
        setSubmitted(false);
        setSubmitError(result.message);
        return;
      }

      setSubmitted(true);
      reset({
        firstname: "",
        lastname: "",
        email: "",
        phone: undefined,
        preferredService: undefined,
        messageBox: "",
        consent: false,
      });
    } catch {
      setSubmitted(false);
      setSubmitError(
        "Odeslání se nepodařilo. Zkuste to prosím znovu za chvíli.",
      );
    }
  });

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-background py-12"
    >
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-glow-secondary blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Začněme spolupracovat
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft mb-2">
            Máte představu o projektu, nápad nebo jen otázku?
          </p>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
            Nemusíte mít vše vymyšlené. Kontaktujte mne a společně probereme,
            jak pomůžu zrealizovat váš nápad v realitu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Kontaktní informace
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15">
                  <Phone size={24} className="text-brand-secondary" />
                </div>
                <div>
                  <div className="mb-1 text-sm text-brand-text-soft">
                    Telefon
                  </div>
                  <a
                    href="tel:+420605465600"
                    className="text-lg text-foreground transition-colors hover:text-brand-secondary"
                  >
                    +420 605 465 600
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15">
                  <Mail size={24} className="text-brand-secondary" />
                </div>
                <div>
                  <div className="mb-1 text-sm text-brand-text-soft">Email</div>
                  <a
                    href="mailto:kroupa.daniel98@seznam.cz"
                    className="text-lg text-foreground transition-colors hover:text-brand-secondary"
                  >
                    kroupa.daniel98@seznam.cz
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-secondary/30 bg-linear-to-br from-brand-secondary/10 to-brand-primary/10 p-6">
              <h4 className="mb-3 font-semibold text-foreground">
                Rychlá odpověď do 1 dne.
              </h4>
              <p className="text-sm leading-relaxed text-brand-text-soft">
                Odpovídám na všechny dotazy do 24 hodin. Preferujete telefonát?
                Klidně zavolejte, rád si s vámi popovídám o vašem projektu.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstname"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Jméno *
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    {...register("firstname")}
                    aria-invalid={Boolean(errors.firstname)}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                    placeholder="Jan"
                  />
                  <InputError message={errors.firstname?.message} />
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Příjmení *
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    {...register("lastname")}
                    aria-invalid={Boolean(errors.lastname)}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                    placeholder="Novák"
                  />
                  <InputError message={errors.lastname?.message} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                  placeholder="jan@email.cz"
                />
                <InputError message={errors.email?.message} />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    setValueAs: (value: string) => {
                      const trimmedValue = value.trim();
                      return trimmedValue === "" ? undefined : trimmedValue;
                    },
                  })}
                  aria-invalid={Boolean(errors.phone)}
                  autoComplete="tel"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                  placeholder="+420 123 456 789"
                />
                <InputError message={errors.phone?.message} />
              </div>

              <div>
                <label
                  htmlFor="preferredService"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Preferovaná služba
                </label>
                <select
                  id="preferredService"
                  defaultValue=""
                  {...register("preferredService", {
                    setValueAs: (value: string) => {
                      const trimmedValue = value.trim();
                      return trimmedValue === "" ? undefined : trimmedValue;
                    },
                  })}
                  aria-invalid={Boolean(errors.preferredService)}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                >
                  <option
                    value=""
                    disabled
                    hidden
                    className="text-muted-foreground"
                  >
                    Vyberte službu
                  </option>
                  {SERVICE_DEFINITIONS.map((service) => (
                    <option key={service.to} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Ostatní">Ostatní</option>
                </select>
                <InputError message={errors.preferredService?.message} />
              </div>

              <div>
                <label
                  htmlFor="messageBox"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Popište nám svoji představu o projektu *
                </label>
                <textarea
                  id="messageBox"
                  {...register("messageBox")}
                  aria-invalid={Boolean(errors.messageBox)}
                  rows={5}
                  className="w-full  resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-accent-foreground focus:border-brand-secondary focus:outline-none transition-colors"
                  placeholder="Např. Jsem majitelem kavárny a potřebuji nový web s online rezervacemi a menu."
                />
                <InputError message={errors.messageBox?.message} />
              </div>

              <div className="rounded-lg px-2">
                <label
                  htmlFor="consent"
                  className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="consent"
                    {...register("consent")}
                    aria-invalid={Boolean(errors.consent)}
                    className="mt-1 h-4 w-4 rounded border-border bg-card accent-brand-primary cursor-pointer"
                  />
                  <span className="cursor-pointer">
                    Souhlasím se{" "}
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        openPrivacy();
                      }}
                      className="text-brand-secondary underline transition-colors hover:text-brand-primary"
                    >
                      zpracováním osobních údajů
                    </button>{" "}
                    pro účely vyřízení poptávky.
                  </span>
                </label>
                <InputError message={errors.consent?.message} />
              </div>

              {submitError ? (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {submitError}
                </p>
              ) : null}

              {submitted ? (
                <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                  Děkujeme za poptávku. Brzy se vám ozveme
                </p>
              ) : null}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || (submitted && !isDirty)}
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isSubmitting || (submitted && !isDirty)
                      ? "bg-brand-secondary text-primary-foreground cursor-not-allowed"
                      : "bg-brand-primary text-primary-foreground shadow-lg shadow-brand-primary/30 hover:scale-105 hover:bg-brand-primary-strong"
                  }`}
                >
                  {isSubmitting ? (
                    <span>Odesílám...</span>
                  ) : submitted && !isDirty ? (
                    <span>Odesláno!</span>
                  ) : (
                    <>
                      <span className="cursor-pointer">Odeslat zprávu</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
