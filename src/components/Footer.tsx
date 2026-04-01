import { Link, useLocation } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { useCookieConsent } from "#/hooks/useCookieConsent";
import { usePrivacyOverlay } from "#/hooks/usePrivacyOverlay";

export function Footer() {
  const location = useLocation();
  const { openSettings } = useCookieConsent();
  const { openPrivacy } = usePrivacyOverlay();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Daniel<span className="text-brand-primary">Kroupa</span>
            </h3>
            <p className="text-muted-foreground">
              Moderní webové řešení pro vaše podnikání.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Navigace</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("sluzby")}
                  className="text-muted-foreground transition-colors hover:text-brand-secondary"
                >
                  Služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground transition-colors hover:text-brand-secondary"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground transition-colors hover:text-brand-secondary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              Právní zásady
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={openPrivacy}
                  className="text-muted-foreground transition-colors hover:text-brand-secondary"
                >
                  Ochrana osobních údajů
                </button>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground transition-colors hover:text-brand-secondary"
                >
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openSettings}
                  className="text-muted-foreground transition-colors hover:text-brand-secondary cursor-pointer"
                >
                  Nastavení cookies
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <a
                  href="tel:+420605465600"
                  className="transition-colors hover:text-brand-secondary"
                >
                  +420 605 465 600
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <a
                  href="mailto:info@danielkroupa.cz"
                  className="transition-colors hover:text-brand-secondary"
                >
                  info@danielkroupa.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Daniel Kroupa. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
