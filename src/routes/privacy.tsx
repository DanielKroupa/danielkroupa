import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

export function PrivacyPage() {
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
              Ochrana osobních údajů
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-brand-text-soft md:text-xl">
              Informace o tom, jak nakládáme s osobními údaji, jaké údaje
              zpracováváme a jaká máte práva.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-8 shadow-lg shadow-brand-primary/10">
              <p className="mb-4 leading-relaxed text-foreground/85">
                Tato stránka slouží k informování návštěvníků o zásadách
                týkajících se shromažďování, používání a zveřejňování osobních
                údajů v případě, že se rozhodnete používat naše služby.
              </p>
              <p className="text-sm text-brand-text-soft">
                Poslední aktualizace: 14. března 2026
              </p>
            </div>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                1. Shromažďování informací
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Pro lepší poskytování služeb můžeme požadovat, abyste nám
                  poskytli určité osobně identifikovatelné informace. Informace,
                  které požadujeme, budou uchovány a používány tak, jak je
                  popsáno v těchto zásadách ochrany osobních údajů.
                </p>
                <p>Konkrétně můžeme shromažďovat následující údaje:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Jméno a příjmení</li>
                  <li>Emailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Informace o projektu a požadavcích</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                2. Používání informací
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Shromážděné informace používáme k následujícím účelům:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Komunikace ohledně vašeho projektu</li>
                  <li>Poskytování cenových nabídek a konzultací</li>
                  <li>Zasílání důležitých aktualizací o vašem projektu</li>
                  <li>Zlepšování našich služeb</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                3. Bezpečnost dat
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Váš osobní údaje bereme vážně a snažíme se používat komerčně
                  přijatelné prostředky jejich ochrany. Pamatujte však, že žádná
                  metoda přenosu přes internet nebo metoda elektronického
                  úložiště není 100% bezpečná a nemůžeme zaručit absolutní
                  bezpečnost.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                4. Cookies
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Náš web může používat cookies pro zlepšení uživatelské
                  zkušenosti. Cookies jsou malé textové soubory, které se
                  ukládají ve vašem zařízení. Můžete nastavit svůj prohlížeč
                  tak, aby odmítl všechny cookies nebo aby indikoval, kdy je
                  cookie odesílán.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                5. Sdílení informací s třetími stranami
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Vaše osobní údaje neprodáváme, nepronajímáme ani nesdílíme s
                  třetími stranami, s výjimkou případů nezbytných pro
                  poskytování našich služeb (např. hosting poskytovatelé) nebo
                  pokud to vyžaduje zákon.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                6. Vaše práva
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>Máte právo:</p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Přístup k vašim osobním údajům</li>
                  <li>Opravu nepřesných údajů</li>
                  <li>Odstranění vašich osobních údajů</li>
                  <li>Omezení zpracování vašich údajů</li>
                  <li>Přenositelnost dat</li>
                  <li>Vznést námitku proti zpracování</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                7. Změny těchto zásad
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Tyto zásady ochrany osobních údajů můžeme čas od času
                  aktualizovat. Doporučujeme pravidelně kontrolovat tuto stránku
                  pro případné změny. O změnách vás budeme informovat
                  zveřejněním nových zásad na této stránce.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                8. Kontaktujte nás
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Pokud máte jakékoli dotazy nebo návrhy týkající se těchto
                  zásad ochrany osobních údajů, neváhejte nás kontaktovat:
                </p>
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
