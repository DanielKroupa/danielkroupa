import {
  Search,
  FileText,
  Code2,
  TestTube,
  Rocket,
  CircleQuestionMark,
  ChartLine,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Analýza potřeb",
    description:
      "Nejdříve poznám vaše vize a představy. Společně projdeme cíle, požadavky a možnosti projektu.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Návrh struktury a designu",
    description:
      "Navrhnu strukturu a vizuální směr, který sedí vaší značce. Odsouhlasíme to spolu, než se pustíme dál.",
  },
  {
    icon: ChartLine,
    number: "3",
    title: "Analýza klíčových slov",
    description:
      "Zjistím, co vaši zákazníci skutečně hledají, a postavím web tak, aby je vyhledavače přivedly k vám. ",
  },
  {
    icon: Code2,
    number: "4",
    title: "Vývoj",
    description:
      "Odsouhlasený design a funkce přetvářím v reálný web. Dbám na kvalitu kódu pro případné budoucí rozšíření. Průběžně jsme ve spojení o postupu a případných úpravách.",
  },

  {
    icon: TestTube,
    number: "5",
    title: "Testování a optimalizace",
    description:
      "Před spuštěním web důkladně prověřím — funkčnost, rychlost, zobrazení na všech zařízeních. Nic se nesmí přehlédnout.",
  },
  {
    icon: Rocket,
    number: "6",
    title: "Spuštění",
    description:
      "A je pomalu hotovo! Hotové řešení je nasazeno online, které bude viditelně pro vás makat 24/7.",
  },
  {
    icon: CircleQuestionMark,
    number: "7",
    title: "Projekt je hotov. Co dál?",
    description:
      "Spuštění projektu je nový začátek, ne konec. Jsem tu pro průběžné úpravy, aktualizace i rozvoj webu.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proces"
      className="relative overflow-hidden bg-linear-to-br from-brand-surface to-background py-12"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-glow-primary blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Jak probíhá spolupráce
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
            Od první zprávy až po spuštění — víte přesně, co se děje a co přijde
            dál
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="group flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/70 p-6 transition-all hover:border-brand-secondary/40 md:flex-row md:items-center md:p-8">
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-brand-primary/25 transition-colors group-hover:text-brand-primary/40">
                      {step.number}
                    </div>
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-primary to-brand-secondary transition-transform group-hover:scale-110">
                      <Icon size={32} className="text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-brand-text-soft">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-22 hidden h-8 w-0.5 bg-linear-to-b from-brand-primary to-transparent md:block" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-6 py-3 text-brand-primary">
            <span className="font-semibold">
              Obvyklá doba realizace: 3-6 týdnů
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
