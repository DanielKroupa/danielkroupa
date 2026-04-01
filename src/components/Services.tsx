import { motion } from "motion/react";
import { Code, Palette, Zap, Search, Settings, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Code,
    link: "/sluzby/vyvoj-webu",
    title: "Vývoj webových stránek na míru",
    description:
      "Dostanete web, který pracuje pro vás — přivádí zákazníky, budí důvěru a drží se konkurence. Postavený na moderních technologiích, rychlý a připravený na růst.",
    iconWrapperClass: "bg-brand-primary/15",
    iconClass: "text-brand-primary",
  },
  {
    icon: Palette,
    link: "/sluzby/redesign",
    title: "Redesign webových stránek",
    description:
      "Zastaralý web zákazníky odradí dřív, než si vás vůbec přečtou. Redesign mu dá novou strukturu, svěží vizuál i technický základ — a vy znovu začnete konvertovat.",
    iconWrapperClass: "bg-brand-secondary/15",
    iconClass: "text-brand-secondary",
  },
  {
    icon: Zap,
    link: "/sluzby/optimalizace-webu",
    title: "Optimalizace výkonu",
    description:
      "Pomalý web ztrácí zákazníky — každá sekunda prodlevy znamená odchody. Zanalyzuji váš web a nastavím ho tak, aby byl rychlý, stabilní a Google ho rád zobrazoval.",
    iconWrapperClass: "bg-amber-400/15",
    iconClass: "text-amber-400",
  },
  {
    icon: Search,
    link: "/sluzby/vylepseni-seo",
    title: "Zviditelnění ve vyhledávačích díky SEO",
    description:
      "Zákazníci vás nejdřív musí najít. Nastavím SEO tak, aby vás vyhledávače začaly doporučovat přirozeně — bez placené reklamy, s dlouhodobým efektem.",
    iconWrapperClass: "bg-lime-400/15",
    iconClass: "text-lime-400",
  },
  {
    icon: Settings,
    link: "/sluzby/webova-analytika",
    title: "Webové aplikace pro podnikání",
    description:
      "Opakující se ruční procesy vás brzdí a stojí peníze. Navrhnu vám webovou aplikaci, která je automatizuje — přehledně, spolehlivě a přesně na míru vašemu provozu.",
    iconWrapperClass: "bg-rose-400/15",
    iconClass: "text-rose-400",
  },
];

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      className="relative overflow-hidden bg-background py-12"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-glow-primary blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Služby
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
            Jak vám mohu pomoct s růstem vašeho podnikání
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.link}
                to={service.link}
                className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <motion.div
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-8 transition-all hover:border-brand-secondary/45"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${service.iconWrapperClass}`}
                  >
                    <Icon size={28} className={service.iconClass} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-brand-text-soft">
                    {service.description}
                  </p>

                  <div className="flex items-center font-medium text-brand-secondary transition-all group-hover:gap-2">
                    Zjistit více
                    <ArrowRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById("kontakt");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="rounded-lg cursor-pointer bg-brand-primary px-8 py-4 text-primary-foreground shadow-lg shadow-brand-primary/30 transition-all hover:scale-105 hover:bg-brand-primary-strong"
          >
            Poptat projekt
          </button>
        </motion.div>
      </div>
    </section>
  );
}
