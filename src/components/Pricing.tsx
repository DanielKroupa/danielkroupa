import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useAnalyticsTracking } from "#/hooks/useAnalyticsTracking";
import { useSectionNavigation } from "#/hooks/useSectionNavigation";

const pricingOptions = [
  {
    title: "Prezentační web",
    description:
      "Jednoduché prezentační řešení pro zviditelnění a nakopnutí vašeho podnikání",

    features: [
      "Responzivní design",
      "Základní SEO",
      "Cca 1-3 stránky",
      "Kontaktní formulář",
      "Integrace Google Analytics",
      "Integrace GDPR",
      "EAA ready",
      "Cookies lišta",
    ],
    popular: true,
  },
  {
    title: "CMS web",
    description: "Webové stránky spravovatelné uživatelem",
    features: [
      "Vše z prezentačního webu",
      "Rozšířené SEO",
      "Více stránek a sekcí",
      "Administrace obsahu",
      "Blog/aktuality",
      "Plánování publikace obsahu",
    ],
    popular: false,
  },
  {
    title: "Webová aplikace",
    description: "Můžu vám ušít web na míru dle funkcí níže.",
    features: [
      "Digitalizace a automatizace procesů",
      "Napojení na stávající systémy",
      "Připraveno pro růst a další rozšiřování",
      "Administrační systém",
      "Vícejazyčné texty",
      "Rozšířené GDPR",
      "... a mnoho dalšího",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const { trackSelectContent } = useAnalyticsTracking();
  const { scrollToSection } = useSectionNavigation();

  const scrollToContact = (itemId: string) => {
    trackSelectContent(itemId, "cta_button");
    scrollToSection("kontakt");
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-surface to-background py-12">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-glow-secondary blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Přehled projektů
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
            Seznamy webových řešení, které nejčastěji realizuji
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative flex h-full flex-col rounded-2xl border bg-card/70 p-8 transition-all ${
                option.popular
                  ? "border-brand-primary shadow-lg shadow-brand-primary/20"
                  : "border-border hover:border-brand-secondary/40"
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Nejčastější volba
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl text-center font-bold text-foreground">
                  {option.title}
                </h3>
                <p className="mb-4 text-brand-text-soft">
                  {option.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Check
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-primary"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  scrollToContact(`pricing_card_${index + 1}_poptat_projekt`);
                }}
                className={`mt-auto w-full rounded-lg py-3 font-semibold transition-all ${
                  option.popular
                    ? "bg-brand-primary text-primary-foreground cursor-pointer shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-strong"
                    : "bg-secondary text-secondary-foreground cursor-pointer hover:bg-accent"
                }`}
              >
                Poptat projekt
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-3xl rounded-2xl border border-brand-secondary/30 bg-linear-to-br from-brand-primary/12 to-brand-secondary/12 p-8"
        >
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Potřebujete něco specifického?
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Každý projekt je unikátní. Cena závisí na rozsahu funkcionalit,
              designu a komplexnosti. Rád vám připravím nezávaznou cenovou
              nabídku přesně na míru vašim potřebám.
            </p>
            <button
              onClick={() => {
                scrollToContact("pricing_customni_nabidka");
              }}
              className="group inline-flex items-center gap-2 cursor-pointer rounded-lg bg-brand-primary px-8 py-4 text-primary-foreground shadow-lg shadow-brand-primary/30 transition-all hover:scale-105 hover:bg-brand-primary-strong"
            >
              Získat cenovou nabídku
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
