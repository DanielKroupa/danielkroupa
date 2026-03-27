import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/terms")({ component: TermsPage });

export function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-background via-brand-surface to-background" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 -left-32 h-80 w-80 rounded-full bg-brand-glow-primary blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-12 bottom-12 h-96 w-96 rounded-full bg-brand-glow-secondary blur-3xl md:-right-32"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Obchodní podmínky
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-brand-text-soft md:text-xl">
              Přehled pravidel spolupráce, práv a povinností při poskytování
              webových služeb.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-8 shadow-lg shadow-brand-primary/10">
              <p className="mb-4 leading-relaxed text-foreground/85">
                Tyto obchodní podmínky upravují práva a povinnosti smluvních
                stran při poskytování služeb webového vývoje.
              </p>
              <p className="text-sm text-brand-text-soft">
                Poslední aktualizace: 14. března 2026
              </p>
            </div>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                1. Úvodní ustanovení
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Tyto obchodní podmínky upravují vztahy mezi poskytovatelem
                  služeb (dále jen "Poskytovatel") a klientem (dále jen
                  "Klient") při poskytování služeb v oblasti vývoje webových
                  stránek a aplikací.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                2. Předmět smlouvy
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Předmětem smlouvy je poskytování následujících služeb:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Vývoj webových stránek a aplikací na míru</li>
                  <li>Redesign existujících webových řešení</li>
                  <li>Optimalizace výkonu a SEO</li>
                  <li>Technická podpora a údržba</li>
                  <li>Konzultační služby v oblasti webových technologií</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                3. Průběh spolupráce
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">
                    3.1 Konzultace a nabídka:
                  </strong>{" "}
                  Po počáteční konzultaci Poskytovatel připraví cenovou nabídku
                  a časový harmonogram projektu.
                </p>
                <p>
                  <strong className="text-foreground">3.2 Smlouva:</strong>{" "}
                  Projekt začíná po vzájemné dohodě a podpisu smlouvy nebo
                  písemného potvrzení objednávky.
                </p>
                <p>
                  <strong className="text-foreground">3.3 Vývoj:</strong>{" "}
                  Poskytovatel průběžně informuje Klienta o stavu projektu a
                  předkládá návrhy ke schválení.
                </p>
                <p>
                  <strong className="text-foreground">3.4 Testování:</strong>{" "}
                  Před spuštěním je projekt důkladně otestován. Klient má
                  možnost vyjádřit připomínky.
                </p>
                <p>
                  <strong className="text-foreground">3.5 Předání:</strong> Po
                  úspěšném testování a schválení je projekt spuštěn a předán
                  Klientovi.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                4. Cena a platební podmínky
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">4.1 Cena:</strong> Cena je
                  stanovena individuálně na základě rozsahu projektu a je
                  uvedena v cenové nabídce.
                </p>
                <p>
                  <strong className="text-foreground">4.2 Platby:</strong>{" "}
                  Standardně je vyžadována záloha ve výši 50% před zahájením
                  prací a doplatek po dokončení projektu. U rozsáhlejších
                  projektů může být platba rozdělena do více splátek.
                </p>
                <p>
                  <strong className="text-foreground">4.3 Splatnost:</strong>{" "}
                  Faktury jsou splatné do 14 dnů od vystavení, pokud není
                  dohodnuto jinak.
                </p>
                <p>
                  <strong className="text-foreground">
                    4.4 Dodatečné práce:
                  </strong>{" "}
                  Změny rozsahu projektu po jeho schválení mohou být zpoplatněny
                  podle aktuální hodinové sazby.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                5. Povinnosti Klienta
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Klient se zavazuje:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>
                    Poskytnout včas všechny potřebné podklady (texty, loga,
                    fotografie)
                  </li>
                  <li>Reagovat na návrhy a dotazy v přiměřené době</li>
                  <li>Zaplatit dohodnutou cenu dle platebních podmínek</li>
                  <li>Respektovat autorská práva Poskytovatele</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                6. Povinnosti Poskytovatele
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Poskytovatel se zavazuje:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Vytvořit projekt v dohodnuté kvalitě a termínu</li>
                  <li>Průběžně informovat o stavu projektu</li>
                  <li>Zajistit funkčnost a otestování řešení</li>
                  <li>Poskytnout základní zaškolení a dokumentaci</li>
                  <li>
                    Zachovávat mlčenlivost o obchodních informacích Klienta
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                7. Autorská práva
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">7.1 Zdrojový kód:</strong>{" "}
                  Po úplném zaplacení ceny přechází majetková práva k
                  vytvořenému dílu na Klienta.
                </p>
                <p>
                  <strong className="text-foreground">7.2 Portfolio:</strong>{" "}
                  Poskytovatel má právo použít realizovaný projekt ve svém
                  portfoliu a pro marketingové účely, pokud není dohodnuto
                  jinak.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                8. Záruka a podpora
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">8.1 Záruka:</strong>{" "}
                  Poskytovatel poskytuje záruku na funkčnost vytvořeného řešení
                  po dobu 30 dnů od předání.
                </p>
                <p>
                  <strong className="text-foreground">8.2 Podpora:</strong>{" "}
                  Technická podpora a údržba po záruční době je poskytována na
                  základě samostatné dohody.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                9. Odstoupení od smlouvy
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">9.1 Klient:</strong>{" "}
                  Klient může odstoupit od smlouvy kdykoliv s tím, že je povinen
                  uhradit práce provedené do data odstoupení.
                </p>
                <p>
                  <strong className="text-foreground">9.2 Poskytovatel:</strong>{" "}
                  Poskytovatel může odstoupit od smlouvy při opakovaném
                  nesplnění závazků Klienta.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                10. Závěrečná ustanovení
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Poskytovatel si vyhrazuje právo změnit tyto obchodní podmínky.
                  Změny budou zveřejněny na těchto stránkách. Pro již
                  probíhající projekty platí podmínky platné v době uzavření
                  smlouvy.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                11. Kontakt
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Pro dotazy k obchodním podmínkám nás kontaktujte:</p>
                <div className="rounded-xl border border-brand-secondary/30 bg-linear-to-br from-brand-secondary/10 to-brand-primary/10 p-6">
                  <p className="font-semibold text-foreground">
                    Email: info@webdev.cz
                  </p>
                  <p className="font-semibold text-foreground">
                    Telefon: +420 123 456 789
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
