import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
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
            Ochrana osobních údajů
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-linear-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-gray-800 mb-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Tato stránka slouží k informování návštěvníků o zásadách
                týkajících se shromažďování, používání a zveřejňování osobních
                údajů v případě, že se rozhodnete používat naše služby.
              </p>
              <p className="text-gray-400 text-sm">
                Poslední aktualizace: 14. března 2026
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                1. Shromažďování informací
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Pro lepší poskytování služeb můžeme požadovat, abyste nám
                  poskytli určité osobně identifikovatelné informace. Informace,
                  které požadujeme, budou uchovány a používány tak, jak je
                  popsáno v těchto zásadách ochrany osobních údajů.
                </p>
                <p>Konkrétně můžeme shromažďovat následující údaje:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Jméno a příjmení</li>
                  <li>Emailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Informace o projektu a požadavcích</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                2. Používání informací
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Shromážděné informace používáme k následujícím účelům:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Komunikace ohledně vašeho projektu</li>
                  <li>Poskytování cenových nabídek a konzultací</li>
                  <li>Zasílání důležitých aktualizací o vašem projektu</li>
                  <li>Zlepšování našich služeb</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                3. Bezpečnost dat
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Váš osobní údaje bereme vážně a snažíme se používat komerčně
                  přijatelné prostředky jejich ochrany. Pamatujte však, že žádná
                  metoda přenosu přes internet nebo metoda elektronického
                  úložiště není 100% bezpečná a nemůžeme zaručit absolutní
                  bezpečnost.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                4. Cookies
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Náš web může používat cookies pro zlepšení uživatelské
                  zkušenosti. Cookies jsou malé textové soubory, které se
                  ukládají ve vašem zařízení. Můžete nastavit svůj prohlížeč
                  tak, aby odmítl všechny cookies nebo aby indikoval, kdy je
                  cookie odesílán.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                5. Sdílení informací s třetími stranami
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Vaše osobní údaje neprodáváme, nepronajímáme ani nesdílíme s
                  třetími stranami, s výjimkou případů nezbytných pro
                  poskytování našich služeb (např. hosting poskytovatelé) nebo
                  pokud to vyžaduje zákon.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                6. Vaše práva
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Máte právo:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Přístup k vašim osobním údajům</li>
                  <li>Opravu nepřesných údajů</li>
                  <li>Odstranění vašich osobních údajů</li>
                  <li>Omezení zpracování vašich údajů</li>
                  <li>Přenositelnost dat</li>
                  <li>Vznést námitku proti zpracování</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                7. Změny těchto zásad
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Tyto zásady ochrany osobních údajů můžeme čas od času
                  aktualizovat. Doporučujeme pravidelně kontrolovat tuto stránku
                  pro případné změny. O změnách vás budeme informovat
                  zveřejněním nových zásad na této stránce.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                8. Kontaktujte nás
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Pokud máte jakékoli dotazy nebo návrhy týkající se těchto
                  zásad ochrany osobních údajů, neváhejte nás kontaktovat:
                </p>
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
