import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-8">
            Obchodní podmínky
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-linear-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-gray-800 mb-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Tyto obchodní podmínky upravují práva a povinnosti smluvních
                stran při poskytování služeb webového vývoje.
              </p>
              <p className="text-gray-400 text-sm">
                Poslední aktualizace: 14. března 2026
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                1. Úvodní ustanovení
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Tyto obchodní podmínky upravují vztahy mezi poskytovatelem
                  služeb (dále jen "Poskytovatel") a klientem (dále jen
                  "Klient") při poskytování služeb v oblasti vývoje webových
                  stránek a aplikací.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                2. Předmět smlouvy
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Předmětem smlouvy je poskytování následujících služeb:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Vývoj webových stránek a aplikací na míru</li>
                  <li>Redesign existujících webových řešení</li>
                  <li>Optimalizace výkonu a SEO</li>
                  <li>Technická podpora a údržba</li>
                  <li>Konzultační služby v oblasti webových technologií</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                3. Průběh spolupráce
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-[#F8FAFC]">
                    3.1 Konzultace a nabídka:
                  </strong>{" "}
                  Po počáteční konzultaci Poskytovatel připraví cenovou nabídku
                  a časový harmonogram projektu.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">3.2 Smlouva:</strong>{" "}
                  Projekt začíná po vzájemné dohodě a podpisu smlouvy nebo
                  písemného potvrzení objednávky.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">3.3 Vývoj:</strong>{" "}
                  Poskytovatel průběžně informuje Klienta o stavu projektu a
                  předkládá návrhy ke schválení.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">3.4 Testování:</strong>{" "}
                  Před spuštěním je projekt důkladně otestován. Klient má
                  možnost vyjádřit připomínky.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">3.5 Předání:</strong> Po
                  úspěšném testování a schválení je projekt spuštěn a předán
                  Klientovi.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                4. Cena a platební podmínky
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-[#F8FAFC]">4.1 Cena:</strong> Cena je
                  stanovena individuálně na základě rozsahu projektu a je
                  uvedena v cenové nabídce.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">4.2 Platby:</strong>{" "}
                  Standardně je vyžadována záloha ve výši 50% před zahájením
                  prací a doplatek po dokončení projektu. U rozsáhlejších
                  projektů může být platba rozdělena do více splátek.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">4.3 Splatnost:</strong>{" "}
                  Faktury jsou splatné do 14 dnů od vystavení, pokud není
                  dohodnuto jinak.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">
                    4.4 Dodatečné práce:
                  </strong>{" "}
                  Změny rozsahu projektu po jeho schválení mohou být zpoplatněny
                  podle aktuální hodinové sazby.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                5. Povinnosti Klienta
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Klient se zavazuje:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
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

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                6. Povinnosti Poskytovatele
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Poskytovatel se zavazuje:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
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

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                7. Autorská práva
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-[#F8FAFC]">7.1 Zdrojový kód:</strong>{" "}
                  Po úplném zaplacení ceny přechází majetková práva k
                  vytvořenému dílu na Klienta.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">7.2 Portfolio:</strong>{" "}
                  Poskytovatel má právo použít realizovaný projekt ve svém
                  portfoliu a pro marketingové účely, pokud není dohodnuto
                  jinak.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                8. Záruka a podpora
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-[#F8FAFC]">8.1 Záruka:</strong>{" "}
                  Poskytovatel poskytuje záruku na funkčnost vytvořeného řešení
                  po dobu 30 dnů od předání.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">8.2 Podpora:</strong>{" "}
                  Technická podpora a údržba po záruční době je poskytována na
                  základě samostatné dohody.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                9. Odstoupení od smlouvy
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-[#F8FAFC]">9.1 Klient:</strong> Klient
                  může odstoupit od smlouvy kdykoliv s tím, že je povinen
                  uhradit práce provedené do data odstoupení.
                </p>
                <p>
                  <strong className="text-[#F8FAFC]">9.2 Poskytovatel:</strong>{" "}
                  Poskytovatel může odstoupit od smlouvy při opakovaném
                  nesplnění závazků Klienta.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                10. Závěrečná ustanovení
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Poskytovatel si vyhrazuje právo změnit tyto obchodní podmínky.
                  Změny budou zveřejněny na těchto stránkách. Pro již
                  probíhající projekty platí podmínky platné v době uzavření
                  smlouvy.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                11. Kontakt
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Pro dotazy k obchodním podmínkám nás kontaktujte:</p>
                <div className="bg-[#1E293B] p-6 rounded-xl">
                  <p className="text-[#F8FAFC]">Email: info@webdev.cz</p>
                  <p className="text-[#F8FAFC]">Telefon: +420 123 456 789</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
