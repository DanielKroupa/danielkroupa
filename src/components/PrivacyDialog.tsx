import { ShieldCheck, X } from "lucide-react";
import { useEffect } from "react";

export function PrivacyDialog({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/45 p-3 sm:p-4 md:p-6">
      <button
        type="button"
        aria-label="Zavřít ochranu osobních údajů"
        onClick={onClose}
        className="absolute inset-0"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="relative mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/35"
      >
        <header className="sticky top-0 z-10 border-b border-border bg-card/95 px-5 py-4 backdrop-blur-md sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-text-soft">
                <ShieldCheck size={14} />
                Ochrana soukromí
              </p>
              <h1
                id="privacy-title"
                className="mt-3 text-2xl font-bold text-foreground sm:text-3xl"
              >
                Ochrana osobních údajů
              </h1>
              <p className="mt-2 text-sm text-brand-text-soft">
                Informace o tom, jak nakládáme s osobními údaji, jaké údaje
                zpracováváme a jaká máte práva.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              title="Zavřít"
              className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-brand-secondary/60 hover:text-brand-secondary"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <div className="space-y-6 pb-2">
            <div className="rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-6">
              <p className="mb-3 leading-relaxed text-foreground/85">
                Tato stránka slouží k informování návštěvníků o zásadách
                týkajících se shromažďování, používání a zveřejňování osobních
                údajů v případě, že se rozhodnete používat naše služby.
              </p>
              <p className="text-sm text-brand-text-soft">
                Poslední aktualizace: 28. března 2026
              </p>
            </div>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                1. Shromažďování informací
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Pro lepší poskytování služeb můžeme požadovat, abyste nám
                  poskytli určité osobně identifikovatelné informace. Informace,
                  které požadujeme, budou uchovány a používány tak, jak je
                  popsáno v těchto zásadách ochrany osobních údajů.
                </p>
                <p>Konkrétně můžeme shromažďovat následující údaje:</p>
                <ul className="list-inside list-disc space-y-1 text-foreground/80 marker:text-brand-secondary">
                  <li>Jméno a příjmení</li>
                  <li>Emailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Informace o projektu a požadavcích</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                2. Používání informací
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>Shromážděné informace používáme k následujícím účelům:</p>
                <ul className="list-inside list-disc space-y-1 text-foreground/80 marker:text-brand-secondary">
                  <li>Komunikace ohledně vašeho projektu</li>
                  <li>Poskytování cenových nabídek a konzultací</li>
                  <li>Zasílání důležitých aktualizací o vašem projektu</li>
                  <li>Zlepšování našich služeb</li>
                </ul>
                <p>
                  Právním základem zpracování je zejména plnění opatření před
                  uzavřením smlouvy na vaši žádost a oprávněný zájem na
                  bezpečném provozu webu. U volitelných cookies je právním
                  základem váš souhlas.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                3. Bezpečnost dat
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Vaše osobní údaje bereme vážně a snažíme se používat komerčně
                  přijatelné prostředky jejich ochrany. Pamatujte však, že žádná
                  metoda přenosu přes internet nebo metoda elektronického
                  úložiště není 100% bezpečná a nemůžeme zaručit absolutní
                  bezpečnost.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                4. Cookies
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Cookies jsou malé textové soubory ukládané ve vašem zařízení.
                  Na našem webu používáme tyto kategorie:
                </p>
                <ul className="list-inside list-disc space-y-1 text-foreground/80 marker:text-brand-secondary">
                  <li>
                    <strong>Nezbytné cookies:</strong> zajišťují základní
                    fungování webu. Tyto cookies jsou aktivní vždy.
                  </li>
                  <li>
                    <strong>Analytické cookies:</strong> Google Analytics 4 pro
                    měření návštěvnosti a výkonu webu. Aktivují se až po vašem
                    výslovném souhlasu.
                  </li>
                  <li>
                    <strong>Preferenční cookies:</strong> slouží pro budoucí
                    ukládání uživatelských preferencí. Aktivují se jen po
                    souhlasu.
                  </li>
                </ul>
                <p>
                  Volitelné cookies (analytické a preferenční) jsou při první
                  návštěvě ve výchozím stavu vypnuté. Váš souhlas ukládáme na
                  dobu 6 měsíců a poté vás znovu požádáme o volbu.
                </p>
                <p>
                  Nastavení můžete kdykoli změnit přes tlačítko "Nastavení
                  cookies" na webu nebo přes odkaz v patičce.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                5. Sdílení informací s třetími stranami
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Vaše osobní údaje neprodáváme, nepronajímáme ani nesdílíme s
                  třetími stranami, s výjimkou případů nezbytných pro
                  poskytování našich služeb nebo pokud to vyžaduje zákon.
                </p>
                <ul className="list-inside list-disc space-y-1 text-foreground/80 marker:text-brand-secondary">
                  <li>
                    <strong>Google Ireland Limited / Google LLC</strong> -
                    analytické měření (pouze po udělení souhlasu s analytickými
                    cookies).
                  </li>
                  <li>
                    <strong>Resend, Inc.</strong> - odeslání kontaktního
                    formuláře a potvrzovacích emailů.
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                6. Vaše práva
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>Máte právo:</p>
                <ul className="list-inside list-disc space-y-1 text-foreground/80 marker:text-brand-secondary">
                  <li>Přístup k vašim osobním údajům</li>
                  <li>Opravu nepřesných údajů</li>
                  <li>Odstranění vašich osobních údajů</li>
                  <li>Omezení zpracování vašich údajů</li>
                  <li>Přenositelnost dat</li>
                  <li>Vznést námitku proti zpracování</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                7. Změny těchto zásad
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Tyto zásady ochrany osobních údajů můžeme čas od času
                  aktualizovat. Doporučujeme pravidelně kontrolovat tuto stránku
                  pro případné změny. O změnách vás budeme informovat
                  zveřejněním nových zásad na této stránce.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/70 p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                8. Kontaktujte nás
              </h2>
              <div className="space-y-3 leading-relaxed text-brand-text-soft">
                <p>
                  Pokud máte jakékoli dotazy nebo návrhy týkající se těchto
                  zásad ochrany osobních údajů, neváhejte nás kontaktovat:
                </p>
                <div className="rounded-xl border border-brand-secondary/30 bg-linear-to-br from-brand-secondary/10 to-brand-primary/10 p-5">
                  <p className="font-normal text-foreground">
                    Email:{" "}
                    <a
                      href="mailto:info@danielkroupa.cz"
                      className="font-semibold"
                    >
                      info@danielkroupa.cz
                    </a>
                  </p>
                  <p className="font-normal text-foreground">
                    Telefon:{" "}
                    <a href="tel:+420605465600" className="font-semibold">
                      +420 605 465 600
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
