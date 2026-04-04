import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { createSeoHead } from "#/lib/seo/meta";

export const Route = createFileRoute("/terms")({
  head: () =>
    createSeoHead({
      title: "Obchodní podmínky | Daniel Kroupa",
      description:
        "Obchodní podmínky pro vývoj webů na míru, redesign, SEO optimalizaci a související služby.",
      path: "/terms",
      noIndex: true,
    }),
  component: TermsPage,
});

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
                Tyto obchodní podmínky upravují pravidla spolupráce mezi
                Poskytovatelem a Objednatelem při realizaci webových služeb.
              </p>
              <p className="text-sm text-brand-text-soft">
                Poslední aktualizace: 4. dubna 2026
              </p>
            </div>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                1. Úvodní ustanovení
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Tyto obchodní podmínky (dále jen "Podmínky") upravují práva a
                  povinnosti mezi Poskytovatelem a Objednatelem při poskytování
                  služeb v oblasti Vývoje webu, Redesignu stránek, Vylepšení
                  SEO, Webové analytiky, Optimalizace webu a související
                  technické podpory.
                </p>
                <p>
                  Služby se dělí na projektové služby s konkrétním výstupem
                  (dílo) a průběžné odborné služby bez jednorázového finálního
                  výstupu.
                </p>
                <p>
                  <strong className="text-foreground">Poskytovatel:</strong>{" "}
                  Daniel Kroupa, fyzická osoba. kontakt: info@danielkroupa.cz,
                  +420 605 465 600.
                </p>
                <p>
                  <strong className="text-foreground">Objednatel:</strong>{" "}
                  fyzická nebo právnická osoba, která si služby objedná na
                  základě nabídky, objednávky nebo smlouvy.
                </p>
              </div>
              <p>
                <strong className="text-foreground"></strong> Objednatel
                potvrzuje, že se s těmito obchodními podmínkami obeznámil a
                vyjadřuje svůj souhlas s jejich zněním.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                2. Rozsah poskytovaných služeb
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Poskytovatel nabízí projektové služby s konkrétním výstupem:
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Vývoj webu (webové stránky a aplikace na míru),</li>
                  <li>Redesign stránek a modernizace stávajících řešení.</li>
                </ul>
                <p>
                  Poskytovatel současně nabízí průběžné odborné služby bez
                  jednorázového finálního díla:
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>Vylepšení SEO (technické i obsahové úpravy),</li>
                  <li>Webová analytika (nastavení, měření a vyhodnocování),</li>
                  <li>Optimalizace webu (výkon, stabilita, UX),</li>
                  <li>konzultace v oblasti webových technologií,</li>
                  <li>údržba a následná technická podpora.</li>
                </ul>
                <p>
                  Konkrétní rozsah služeb je vždy definován v individuální
                  nabídce, objednávce nebo smlouvě. Co není výslovně sjednáno,
                  není součástí ceny projektu.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                3. Uzavření spolupráce a podklady
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">
                    3.1 Vznik smluvního vztahu:
                  </strong>{" "}
                  Proces uzavření spolupráce vzniká zaplacením zálohové faktury
                  Objednatelem nebo uzavřením samostatné smlouvy. Tímto se celý
                  proces spolupráce stává závazným okamžikem.
                </p>
                <p>
                  <strong className="text-foreground">3.2 Podklady:</strong>{" "}
                  Objednatel poskytne veškeré podklady potřebné pro realizaci
                  projektu (texty, fotografie, přístupy, brand manuál a další
                  materiály) ve sjednaných termínech pokud není uvedeno jinak.
                </p>

                <p>
                  Pokud Objednatel neposkytne potřebnou součinnost, mohou být
                  termíny realizace přiměřeně posunuty.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                4. Cena a platební podmínky
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">4.1 Cena:</strong>{" "}
                  stanovuje se individuálně podle typu služby, rozsahu a
                  složitosti. Pokud není dohodnuto jinak, ceny jsou uvedeny bez
                  DPH.
                </p>
                <p>
                  <strong className="text-foreground">
                    4.2 Projektové služby:
                  </strong>{" "}
                  u služeb Vývoj webu a Redesign stránek Objednatel hradí po
                  schválení nabídky první zálohu ve výši 1/3 ceny. Po dokončení
                  struktury a designu je vystavena druhá zálohová faktura ve
                  výši 2/3 ceny. Zbývající část ceny je fakturována po dokončení
                  a spuštění projektu.
                </p>

                <p>
                  <strong className="text-foreground">
                    4.3 Průběžné služby:
                  </strong>{" "}
                  u služeb Vylepšení SEO, Webová analytika a Optimalizace webu
                  probíhá fakturace průběžně (typicky měsíčně) dle sjednaného
                  rozsahu a období.
                </p>
                <p>
                  <strong className="text-foreground">4.4 Splatnost:</strong>{" "}
                  faktury jsou splatné do 14 kalendářních dnů od data vystavení,
                  není-li dohodnuto jinak.
                </p>
                <p>
                  <strong className="text-foreground">
                    4.5 Změny zadání a nadlimitní práce:
                  </strong>{" "}
                  změny rozsahu po schválení nabídky jsou považovány za
                  vícepráce a jsou účtovány dle sazby 700 Kč/hod nebo dle
                  samostatné cenové nabídky.
                </p>
                <p>
                  <strong className="text-foreground">4.6 Prodlení:</strong> v
                  případě prodlení s úhradou je Poskytovatel oprávněn pozastavit
                  práce do úplného uhrazení splatných závazků.
                </p>
                <p>
                  Zároveň má Poskytovatel právo započíst úrok z prodlení ve výši
                  0,1% z dlužné částky za každý den prodlení.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                5. Harmonogram a předání
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Termín realizace a časový rozsah je orientační s ohledem na
                  složitost projektu a součinnost Objednatele.
                </p>
                <p>
                  Projektová služba je považována za předanou okamžikem předání
                  výstupů, nasazení na hosting třetí strany nebo zpřístupnění
                  repozitáře, podle povahy projektu.
                </p>
                <p>
                  U průběžných služeb (Vylepšení SEO, Webová analytika,
                  Optimalizace webu) probíhá plnění kontinuálně formou
                  implementací, reportů, doporučení a vyhodnocení, nikoli jako
                  jednorázové předání díla.
                </p>
                <p>
                  Pokud Objednatel u projektových služeb neoznámí podstatné vady
                  bez zbytečného odkladu do 30 dnů od data předání (není-li
                  uvedeno jinak), má se za to, že výstup převzal ve stavu, v
                  jakém byl předán.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                6. Změnové požadavky
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Změny konceptu designu, funkčního rozsahu nebo struktury po
                  schválení zadání se považují za nový požadavek a jsou účtovány
                  jako vícepráce.
                </p>
                <p>
                  Oprava prokazatelné chyby Poskytovatelem oproti schválenému
                  zadání není považována za vícepráci.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                7. Práva a povinnosti smluvních stran
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">Objednatel:</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>
                    garantuje, že podklady poskytnuté Poskytovateli neporušují
                    práva třetích osob,
                  </li>
                  <li>
                    poskytne součinnost potřebnou k řádnému plnění zakázky,
                  </li>
                  <li>uhradí cenu za službu v souladu s těmito Podmínkami.</li>
                </ul>
                <p>
                  <strong className="text-foreground">Poskytovatel:</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/80 marker:text-brand-secondary">
                  <li>
                    postupuje s odbornou péčí a v souladu se schváleným zadáním,
                  </li>
                  <li>
                    informuje Objednatele o stavu zakázky v přiměřených
                    intervalech,
                  </li>
                  <li>
                    zachovává mlčenlivost o neveřejných informacích Objednatele.
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                8. Autorská práva a licence
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  <strong className="text-foreground">
                    8.1 Projektové výstupy:
                  </strong>{" "}
                  u služeb Vývoj webu a Redesign stránek přechází majetková
                  práva k dílu nebo licence v dohodnutém rozsahu na Objednatele
                  až po úplném uhrazení ceny.
                </p>
                <p>
                  <strong className="text-foreground">
                    8.2 Výstupy průběžných služeb:
                  </strong>{" "}
                  u služeb Vylepšení SEO, Webová analytika a Optimalizace webu
                  získává Objednatel právo užívat dodané výstupy (např.
                  nastavení, reporty, doporučení) v rozsahu sjednaném pro danou
                  zakázku.
                </p>

                <p>
                  <strong className="text-foreground">8.3 Portfolio:</strong>{" "}
                  Poskytovatel je oprávněn zveřejnit realizovaný projekt ve svém
                  portfoliu, není-li písemně dohodnuto jinak.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                9. Odpovědnost a omezení odpovědnosti
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Poskytovatel neodpovídá za škody způsobené nesprávným
                  používáním výstupů, neodbornými zásahy třetích stran, změnami
                  v externích službách nebo neposkytnutím součinnosti ze strany
                  Objednatele.
                </p>
                <p>
                  Poskytovatel neodpovídá za právní soulad textů, fotografií,
                  ochranných známek a dalších podkladů dodaných Objednatelem.
                </p>
                <p>
                  U služeb Vylepšení SEO, Webová analytika a Optimalizace webu
                  Poskytovatel trvale negarantuje konkrétní pozice ve
                  vyhledávačích, návštěvnost, konverzní poměry ani obchodní
                  výsledky.
                </p>
                <p>
                  Objednatel bere na vědomí, že přesnost měřených dat v
                  nasazených analytických nástrojích může být ovlivněna faktory
                  mimo kontrolu Poskytovatele (např. nastavením souhlasů
                  uživatelů, adblock nástroji nebo změnami platforem třetích
                  stran).
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                10. Záruka a podpora
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  U projektových služeb (Vývoj webu, Redesign stránek)
                  Poskytovatel poskytuje záruku na funkčnost řešení po dobu 30
                  dnů od předání, pokud není dohodnuto jinak.
                </p>
                <p>
                  U průběžných služeb (Vylepšení SEO, Webová analytika,
                  Optimalizace webu) Poskytovatel odpovídá za odborné provedení
                  sjednaných činností, nikoli za konkrétní výsledek ovlivněný
                  externími faktory.
                </p>
                <p>
                  Záruka se nevztahuje na nové požadavky, rozšíření funkcí,
                  zásahy třetích stran ani změny provedené mimo rámec sjednané
                  správy. Pozáruční podpora, údržba a další rozvoj jsou
                  poskytovány na základě samostatné dohody.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                11. Odstoupení od smlouvy a ukončení
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Objednatel může spolupráci ukončit i bez uvedení důvodu; v
                  takovém případě je povinen uhradit již provedené práce, účelně
                  vynaložené náklady a objednané externí služby.
                </p>
                <p>
                  Poskytovatel může spolupráci ukončit zejména při opakovaném
                  porušení platebních povinností nebo při neposkytování potřebné
                  součinnosti ze strany Objednatele.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                12. Závěrečná ustanovení
              </h2>
              <div className="space-y-4 leading-relaxed text-brand-text-soft">
                <p>
                  Poskytovatel je oprávněn Podmínky jednostranně měnit; pro již
                  potvrzené zakázky platí znění účinné v okamžiku potvrzení
                  nabídky, pokud se strany nedohodnou jinak.
                </p>
                <p>
                  Právní vztahy neupravené těmito Podmínkami se řídí právním
                  řádem České republiky. Spory budou strany řešit přednostně
                  smírně.
                </p>
                <p>Tyto Podmínky nabývají účinnosti dnem 04.04.2026.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
