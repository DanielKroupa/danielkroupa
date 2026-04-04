import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { createSeoHead } from "#/lib/seo/meta";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/webova-analytika")({
  component: WebAnalyticsPage,
  head: () =>
    createSeoHead({
      title: "Webová analytika | Daniel Kroupa",
      description:
        "Nastavení GA4, GTM a měření konverzí pro přesná data, lepší vyhodnocení kampaní a jistotu v marketingových rozhodnutích.",
      path: "/sluzby/webova-analytika",
    }),
});

export function WebAnalyticsPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/webova-analytika"];

  return (
    <ServiceDetailTemplate title={service.title}>
      <section className="mb-10 grid items-start gap-8 md:grid-cols-[2fr,1.3fr]">
        <div className="space-y-4 text-lg leading-relaxed text-brand-text-soft">
          <p>
            Když v analytice chybí důležité události nebo jsou data nepřesná,
            rozhodování o marketingu je spíš odhad než jistota. Webová analytika
            vám dá jasný přehled o tom, odkud lidé přicházejí, co na webu dělají
            a které kroky vedou ke konverzi.
          </p>
          <p>
            Nastavím měření tak, aby dávalo smysl vašemu podnikání. Zaměříme se
            na to, co je skutečně důležité pro vaše kampaně a obchodní cíle, bez
            zbytečně složitých dashboardů a bez datového šumu.
          </p>
        </div>

        <aside className="rounded-2xl border border-border bg-card/70 p-4 sm:p-5">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Co získáte
          </h2>
          <div className="space-y-2 text-sm text-brand-text-soft">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>Jistotu, že měříte správné události a konverze</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>
                Přehlednější vyhodnocení reklam a marketingových kanálů
              </span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>Data, podle kterých se dá rozhodovat v praxi</span>
            </p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-medium text-brand-primary">
            <Clock size={16} />
            <span>Obvyklé nastavení: 1-3 týdny podle rozsahu měření</span>
          </div>
        </aside>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-foreground">
          Kdy dává webová analytika největší smysl
        </h2>
        <p className="mb-5 text-brand-text-soft">
          Pokud se poznáváte v některém z bodů níže, je čas nastavit měření
          správně.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: <BarChart2 size={17} className="text-amber-400" />,
              text: "Spouštíte kampaně, ale nevíte, které kanály reálně přinášejí poptávky nebo objednávky.",
            },
            {
              icon: <Search size={17} className="text-amber-400" />,
              text: "V reportech vidíte čísla, ale chybí vám jasná odpověď, co funguje a co ne.",
            },
            {
              icon: <Users size={17} className="text-amber-400" />,
              text: "Návštěvnost na web chodí, ale není zřejmé, kde uživatelé odcházejí před konverzí.",
            },
            {
              icon: <TrendingUp size={17} className="text-amber-400" />,
              text: "Investujete do marketingu a potřebujete mít jistotu, že rozpočet míří do správných aktivit.",
            },
            {
              icon: <Settings size={17} className="text-amber-400" />,
              text: "GA4 nebo GTM je nastavené jen částečně a měření není sjednocené napříč webem.",
            },
            {
              icon: <FileText size={17} className="text-amber-400" />,
              text: "Chcete jasný měřící plán, který spojí byznys cíle s konkrétními událostmi v analytice.",
            },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-xl bg-background/60 p-4"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15">
                {icon}
              </div>
              <p className="text-sm text-brand-text-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Settings className="h-6 w-6 text-brand-primary" />
          Jak spolupráce probíhá krok za krokem
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Postup je přehledný a navazuje na vaše obchodní cíle, aby výsledkem
          nebylo jen technické nastavení, ale prakticky použitelné měření.
        </p>
        <ol className="space-y-4 text-brand-text-soft">
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Vstupní konzultace
              </p>
              <p className="text-sm">
                Projdeme vaše cíle, marketingové kanály a to, jak dnes měříte
                výkon. Ujasníme si, které konverze jsou pro vás skutečně
                důležité.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">Měřící plán</p>
              <p className="text-sm">
                Připravím plán, co přesně měřit, jak to pojmenovat a jak
                propojit události s vašimi obchodními cíli, aby data byla
                dlouhodobě srozumitelná.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Implementace GA4 a GTM
              </p>
              <p className="text-sm">
                Nastavím měření včetně consent mode a nasadím tracking událostí
                podle schváleného plánu, aby data odpovídala realitě.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Kontrola a validace dat
              </p>
              <p className="text-sm">
                Ověřím, že se konverze i klíčové interakce zapisují správně a
                nevznikají duplicitní nebo zavádějící záznamy.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              5
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Předání a interpretace
              </p>
              <p className="text-sm">
                Dostanete srozumitelný přehled, jak data číst a jak je používat
                při rozhodování o kampaních a dalším marketingu.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <BarChart2 className="h-6 w-6 text-brand-primary" />
          Co je v rámci služby zahrnuto
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <FileText className="text-brand-primary" size={18} />,
              title: "Měřící plán",
              desc: "Definice toho, co a proč měřit, aby analytika odpovídala vašim obchodním prioritám.",
            },
            {
              icon: <Settings className="text-brand-primary" size={18} />,
              title: "Nastavení GA4, GTM a consent mode",
              desc: "Technické nastavení měření s ohledem na správu souhlasu a konzistentní sběr dat.",
            },
            {
              icon: <TrendingUp className="text-brand-primary" size={18} />,
              title: "Tracking konverzí a klíčových událostí",
              desc: "Měření formulářů, CTA prvků a dalších interakcí, které mají dopad na obchodní výsledky.",
            },
            {
              icon: <Users className="text-brand-primary" size={18} />,
              title: "Vyhodnocení marketingových kanálů",
              desc: "Lepší přehled, odkud přicházejí kvalitní návštěvy a které kanály si zaslouží větší rozpočet.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-3 rounded-xl bg-background/60 p-4"
            >
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-brand-text-soft">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-foreground">
          Co tato služba není
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Abychom měli od začátku jasno, webová analytika neřeší:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Dlouhodobou SEO strategii a průběžné SEO kampaně",
            "Technickou optimalizaci výkonu webu (LCP, INP, CLS)",
            "Kompletní redesign UX/UI a změny vizuálního směru",
            "Vývoj nového webu nebo aplikace od nuly",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-background/60 p-4"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15">
                <AlertTriangle size={17} className="text-amber-400" />
              </div>
              <p className="text-sm text-brand-text-soft">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <CheckCircle2 className="h-6 w-6 text-brand-primary" />
          Cena a další postup
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Rozsah analytiky se odvíjí od toho, kolik kanálů, stránek a konverzí
          potřebujete měřit. Proto vždy navrhnu konkrétní postup po krátké
          konzultaci, kde si ujasníme cíle i priority.
        </p>
        <p className="mb-4 text-brand-text-soft">
          Díky tomu získáte službu nastavenou na váš reálný provoz, ne obecný
          balíček, který se tváří univerzálně pro všechny.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary">
          <ArrowRight size={16} />
          <span>Nezávazně poptat webovou analytiku</span>
        </div>
      </section>
    </ServiceDetailTemplate>
  );
}
