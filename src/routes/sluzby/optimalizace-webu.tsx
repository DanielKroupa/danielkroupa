import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gauge,
  Image,
  Layers,
  ServerCog,
  ShieldCheck,
  Split,
  Zap,
} from "lucide-react";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { createSeoHead } from "#/lib/seo/meta";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/optimalizace-webu")({
  component: WebsiteOptimizationPage,
  head: () =>
    createSeoHead({
      title: "Optimalizace webu | Daniel Kroupa",
      description: "Zrychlení a technické vyladění webu bez redesignu.",
      path: "/sluzby/optimalizace-webu",
    }),
});

export function WebsiteOptimizationPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/optimalizace-webu"];

  return (
    <ServiceDetailTemplate title={service.title}>
      <section className="mb-10 grid items-start gap-8 md:grid-cols-[2fr,1.3fr]">
        <div className="space-y-4 text-lg leading-relaxed text-brand-text-soft">
          <p>
            Pomalý web dokáže pokazit i skvělou nabídku. Návštěvník přijde,
            chvíli čeká a odejde ke konkurenci. Optimalizace webu je rychlý a
            měřitelný zásah, který zlepší načítání, stabilitu i plynulost, aniž
            by se měnil vzhled vašeho webu.
          </p>
          <p>
            Tato služba je pro weby, které vizuálně fungují, ale jsou pomalé
            nebo nespolehlivé. Místo drahého redesignu opravíme to, co web
            brzdí, aby byl rychlý a příjemný pro návštěvníky.
          </p>
        </div>

        <aside className="rounded-2xl border border-border bg-card/70 p-4 sm:p-5">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Cílový výsledek
          </h2>
          <div className="space-y-2 text-sm text-brand-text-soft">
            <p className="flex items-start gap-2">
              <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>LCP pod 2,5 s (rychlé načtení hlavního obsahu)</span>
            </p>
            <p className="flex items-start gap-2">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>INP pod 200 ms (rychlá reakce webu na kliknutí)</span>
            </p>
            <p className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span>Stabilní načítání bez nepříjemných výkyvů</span>
            </p>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-medium text-brand-primary">
            <Clock3 size={16} />
            <span>Obvyklá realizace: 1-3 týdny podle rozsahu</span>
          </div>
        </aside>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-foreground">
          Kdy dává optimalizace webu smysl
        </h2>
        <p className="mb-5 text-brand-text-soft">
          Pokud se v těchto bodech poznáváte, je správný čas to řešit.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: <Zap size={17} className="text-amber-400" />,
              text: "Web se načítá pomalu hlavně na mobilu a lidé tak odcházejí dřív než si ho prohlédnou.",
            },
            {
              icon: <Gauge size={17} className="text-amber-400" />,
              text: "Měření výkonu hlásí problémy a stránky mají slabé výsledky",
            },
            {
              icon: <Image size={17} className="text-amber-400" />,
              text: "Obrázky se načítají pomalu a brzdí tak načtení celé stránky.",
            },
            {
              icon: <Split size={17} className="text-amber-400" />,
              text: "Web načítá příliš mnoho věcí najednou a reaguje pomalu",
            },
            {
              icon: <ServerCog size={17} className="text-amber-400" />,
              text: 'Stránky odpovídají pomalu nebo se zbytečně dlouho "rozjíždí"',
            },
            {
              icon: <AlertTriangle size={17} className="text-amber-400" />,
              text: "Objevují se náhodné chyby nebo kolísání rychlosti",
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
          <Layers className="h-6 w-6 text-brand-primary" />
          Jak spolupráce probíhá krok za krokem
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Jednorázový audit a následná realizace. Bez omáčky, s jasným plánem a
          viditelným výsledkem.
        </p>
        <ol className="space-y-4 text-brand-text-soft">
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Vstupní kontrola webu
              </p>
              <p className="text-sm">
                Změřím aktuální stav webu a podívám se, co ho nejvíc zpomaluje.
                Výsledkem bude seznam problémů, které má smysl řešit jako první.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">Plán priorit</p>
              <p className="text-sm">
                Rozdělím úpravy na rychlé kroky a zásahy s největším dopadem.
                Předem víte, co se bude dělat, proč a v jakém pořadí.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Realizace optimalizací
              </p>
              <p className="text-sm">
                Nasadím konkrétní vylepšení, která web zrychlí. Od optimalizace
                obrázků, kódu až po nastavení hostingu.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">Kontrola výsledků</p>
              <p className="text-sm">
                Po nasazení znovu změřím web a porovnáme nový stav. Uvidíte
                konkrétní výsledek, ne jen seznam odškrtnutých úkolů.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              5
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Předání a další kroky
              </p>
              <p className="text-sm">
                Dostanete přehled změn i doporučení, jak si rychlý web udržet i
                při dalším rozvoji.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Co přesně optimalizuji
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <Gauge className="text-brand-primary" size={18} />,
              title: "Kontrola rychlosti klíčových stránek",
              desc: "Zjistím, kde lidé čekají nejdéle a co má největší vliv na pomalý start stránky.",
            },
            {
              icon: <Image className="text-brand-primary" size={18} />,
              title: "Optimalizace obrázků, fontů a skriptů",
              desc: "Zmenším datovou zátěž webu bez ztráty kvality, aby se stránky načítaly znatelně rychleji.",
            },
            {
              icon: <Split className="text-brand-primary" size={18} />,
              title: "Lazy loading a code splitting",
              desc: "Web načítá jen to, co je právě potřeba. Díky tomu je rychlejší hned od prvního otevření.",
            },
            {
              icon: <ServerCog className="text-brand-primary" size={18} />,
              title: "Cache, komprese, CDN a HTTP hlavičky",
              desc: "Nastavím doručování obsahu tak, aby web běžel rychle a stabilně i při vyšší návštěvnosti.",
            },
            {
              icon: <ShieldCheck className="text-brand-primary" size={18} />,
              title: "Opravy technických chyb a stability",
              desc: "Odstraním chyby, které zpomalují web nebo způsobují nestabilní chování.",
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
          Abychom měli od začátku jasno, optimalizace výkonu neřeší:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Změnu vizuálu, brandingu a celkového designu webu",
            "Kompletní UX redesign nebo novou strukturu stránek",
            "Přepis webu od nuly",
            "Dlouhodobou SEO strategii na měsíce dopředu",
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
          Cena závisí na stavu webu, rozsahu úprav a platformě, na které web
          běží. Proto navrhuji cenu až po krátkém auditu, kde přesně určíme, co
          je potřeba udělat.
        </p>
        <p className="mb-4 text-brand-text-soft">
          Po úvodním hovoru dostanete konkrétní plán, časový odhad i cenu. Bez
          nejasností, bez skrytých položek a bez závazku, pokud vám návrh nebude
          dávat smysl.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary">
          <ArrowRight size={16} />
          <span>Domluvme si konzultaci k optimalizaci vašeho webu</span>
        </div>
      </section>
    </ServiceDetailTemplate>
  );
}
