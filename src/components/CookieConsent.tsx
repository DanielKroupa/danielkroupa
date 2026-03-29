import { ShieldCheck, X, Cookie } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useCookieConsent } from "#/hooks/useCookieConsent";
import { useGoogleAnalyticsConsent } from "#/hooks/useGoogleAnalyticsConsent";
import { usePrivacyOverlay } from "#/hooks/usePrivacyOverlay";

export function CookieConsentLayer() {
  const {
    bannerVisible,
    categories,
    settingsOpen,
    openSettings,
    closeSettings,
    acceptAll,
    rejectAll,
    saveSelection,
  } = useCookieConsent();
  const { openPrivacy } = usePrivacyOverlay();

  useGoogleAnalyticsConsent(categories.analytics);

  const [draft, setDraft] = useState({
    analytics: categories.analytics,
    preferences: categories.preferences,
  });
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!settingsOpen) {
      return;
    }

    setDraft({
      analytics: categories.analytics,
      preferences: categories.preferences,
    });
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSettings();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [
    categories.analytics,
    categories.preferences,
    closeSettings,
    settingsOpen,
  ]);

  return (
    <>
      {!bannerVisible ? (
        <button
          type="button"
          onClick={openSettings}
          className="fixed right-4 bottom-6 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card p-3 text-sm font-semibold text-foreground shadow-lg shadow-brand-primary/15 transition-all hover:-translate-y-0.5 hover:border-brand-secondary/60 hover:text-brand-secondary md:right-6"
          aria-label="Otevřít nastavení cookies"
        >
          <Cookie size={20} />
        </button>
      ) : null}

      {bannerVisible ? (
        <section
          aria-live="polite"
          aria-label="Lišta pro souhlas s cookies"
          className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto grid gap-4 px-6 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-base font-semibold text-foreground">
                Nastavení souhlasu s cookies
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Používáme pouze nezbytné cookies. Analytické a preferenční
                cookies zapneme až po vašem souhlasu. Volbu můžete kdykoli
                změnit přes tlačítko „Nastavení cookies“ nebo v patičce webu.
                Podrobnosti najdete na stránce{" "}
                <button
                  type="button"
                  onClick={openPrivacy}
                  className="text-brand-secondary underline transition-colors hover:text-brand-primary"
                >
                  Ochrana osobních údajů
                </button>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-primary-strong"
              >
                Přijmout vše
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-secondary/60 hover:text-brand-secondary"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="rounded-lg border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-secondary/70 hover:bg-brand-secondary/15"
              >
                Upravit nastavení
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {settingsOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 md:items-center">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/25"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-text-soft">
                  <ShieldCheck size={14} />
                  Ochrana soukromí
                </p>
                <h2
                  id="cookie-settings-title"
                  className="mt-3 text-2xl font-bold text-foreground"
                >
                  Nastavení cookies
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Zvolte, které volitelné cookies chcete povolit. Nezbytné
                  cookies jsou nutné pro správné fungování webu a nelze je
                  vypnout.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeSettings}
                title="Zavřít nastavení cookies"
                className="rounded-full border border-border p-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-secondary/60 hover:text-brand-secondary"
              >
                <X />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <ConsentCategoryRow
                title="Nezbytné"
                description="Zajišťují základní funkce, bez kterých nemůže web fungovat správně."
                checked
                disabled
                onChange={() => {
                  return;
                }}
              />
              <ConsentCategoryRow
                title="Analytické"
                description="Pomáhají měřit návštěvnost pomocí Google Analytics. Aktivují se až po souhlasu."
                checked={draft.analytics}
                onChange={(checked) => {
                  setDraft((current) => ({ ...current, analytics: checked }));
                }}
              />
              <ConsentCategoryRow
                title="Preferenční"
                description="Umožní v budoucnu ukládat volby zlepšující komfort používání webu."
                checked={draft.preferences}
                onChange={(checked) => {
                  setDraft((current) => ({ ...current, preferences: checked }));
                }}
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-secondary/60 hover:text-brand-secondary"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={() => {
                  saveSelection(draft);
                }}
                className="rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-primary-strong"
              >
                Uložit výběr
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

function ConsentCategoryRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/60 p-4">
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`Přepnout ${title.toLowerCase()} cookies`}
        disabled={disabled}
        onClick={() => {
          if (disabled) {
            return;
          }
          onChange(!checked);
        }}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-colors ${
          checked
            ? "border-brand-primary bg-brand-primary"
            : "border-border bg-muted"
        } ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
