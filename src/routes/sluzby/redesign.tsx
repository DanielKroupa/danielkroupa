import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Code2,
  Eye,
  Globe2,
  LayoutTemplate,
  RefreshCw,
  Search,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/redesign")({
  component: RedesignPage,
  head: () => ({
    meta: [
      {
        title: "Redesign webu | Daniel Kroupa",
      },
    ],
  }),
});

export function RedesignPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/redesign"];

  return (
    <ServiceDetailTemplate title={service.title}>
      <section className="mb-10 grid gap-8 md:grid-cols-[2fr,1.4fr] items-start">
        <div className="space-y-4 text-lg leading-relaxed text-brand-text-soft">
          <p>
            Redesign webu není jen o tom, aby web vypadal moderněji. Je to
            příležitost přehodnotit, co váš web dělá, pro koho ho děláte a
            jestli vám skutečně pomáhá přivádět zákazníky. Dobře provedený
            redesign promění zastaralou nebo nefunkční prezentaci v nástroj,
            který pracuje za vás – i v noci, i o víkendu.
          </p>
          <p>
            Ať už máte web z WordPressu, šablony z Wixu, nebo vlastní kód starý
            několik let – projdeme situaci společně a navrhneme postup, který
            dává smysl pro váš konkrétní případ. Někdy stačí web vylepšit, jindy
            se vyplatí přepsat od základu. Vždy vám řeknu upřímně, co doporučuji
            a proč.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-foreground">
          Kdy víš, že potřebuješ redesign?
        </h2>
        <p className="mb-5 text-brand-text-soft">
          Tyto signály jsou jasnou známkou toho, že je čas se webem zabývat.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: <Eye size={17} className="text-brand-primary" />,
              text: "Web vypadá zastarale nebo neprofesionálně a nechcete ho ukazovat potenciálním klientům",
            },
            {
              icon: <AlertTriangle size={17} className="text-brand-primary" />,
              text: "Nefunguje správně na mobilech a tabletech, kde dnes přichází většina návštěvníků",
            },
            {
              icon: <Zap size={17} className="text-brand-primary" />,
              text: "Načítá se pomalu – a vy víte, že zákazníci nebudou čekat",
            },
            {
              icon: <Users size={17} className="text-brand-primary" />,
              text: "Lidé na web chodí, ale poptávky nepřicházejí – web nepřesvědčuje",
            },
            {
              icon: <LayoutTemplate size={17} className="text-brand-primary" />,
              text: "Navigace je matoucí, zákazníci nenajdou co hledají a odcházejí",
            },
            {
              icon: <Globe2 size={17} className="text-brand-primary" />,
              text: "Web neodráží vaši aktuální značku, nabídku ani positioning",
            },
            {
              icon: <Search size={17} className="text-brand-primary" />,
              text: "Konkurence vás předbíhá ve vyhledávačích a jejich web prostě působí důvěryhodněji",
            },
            {
              icon: <Code2 size={17} className="text-brand-primary" />,
              text: "Každá malá úprava je technicky složitá nebo drahá – web se nedá snadno rozvíjet",
            },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-xl bg-background/60 p-4"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/15">
                {icon}
              </div>
              <p className="text-sm text-brand-text-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          Proč mi svěřit redesign vašeho webu
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/15">
              <Search className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Analýza vždy jako první krok
              </p>
              <p className="text-sm text-brand-text-soft">
                Nepoustuji se rovnou do designu. Nejprve pochopím, co na
                stávajícím webu nefunguje, proč lidé odcházejí a co naopak stojí
                za zachování. Redesign stavím na datech, ne na dojmech.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary/15">
              <Users className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Jeden člověk, jasná domluva
              </p>
              <p className="text-sm text-brand-text-soft">
                Mluvíte přímo s člověkem, který váš projekt navrhuje, realizuje,
                i komunikuje. Žádné předávání mezi account manažerem, designérem
                a vývojářem.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/15">
              <RefreshCw className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Znám obě strany redesignu
              </p>
              <p className="text-sm text-brand-text-soft">
                Vím, co stávající web trápí a zároveň vím, co moderní web v roce
                2026 umí. Nenavrhuji redesign „od stolu" – vycházím z toho, kde
                se váš web a zákazníci reálně nacházejí.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary/15">
              <CheckCircle2 className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Web, který pracuje pro vás
              </p>
              <p className="text-sm text-brand-text-soft">
                Cílem není jen hezčí web. Redesign musí přinést měřitelné
                výsledky – více poptávek, lepší důvěru u zákazníků a snazší
                práci s vaším online podnikáním.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Settings className="h-6 w-6 text-brand-primary" />
          Jak redesign probíhá – krok za krokem
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Redesign je systematický proces. Každý krok má svůj smysl a díky němu
          víte, v jaké fázi se projekt nachází a co nás čeká dál.
        </p>
        <ol className="space-y-4 text-brand-text-soft">
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Analýza stávajícího webu
              </p>
              <p className="text-sm">
                Projdeme váš aktuální web pohledem zákazníka i experta. Podíváme
                se na strukturu, rychlost, texty, mobilní zobrazení a to, co se
                v analytice chová podezřele. Co funguje – zachováme. Co brzdí –
                nahradíme.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Audit obsahu a SEO
              </p>
              <p className="text-sm">
                Zmapuji stávající URL adresy, klíčová slova a obsah. Cílem je
                zajistit, aby redesign nezničil to, co jste si u Googlu
                vybudovali – a ideálně to posunul dál.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Návrh nové struktury a vizuálního směru
              </p>
              <p className="text-sm">
                Navrhnu nové rozvržení stránek i vizuální styl, který sedí vaší
                aktuální značce. Ukážu vám náhledy nebo prototypy, abyste si
                byli výsledkem jistí ještě před samotným vývojem.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">Vývoj nového webu</p>
              <p className="text-sm">
                Podle situace buď přepíšu web od základu, nebo vylepším
                stávající řešení – záleží na technickém stavu původního webu a
                na tom, co pro vás dává největší smysl. Pravidelně vám ukazuji
                průběžné verze.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              5
            </div>
            <div>
              <p className="font-semibold text-foreground">Přenos obsahu</p>
              <p className="text-sm">
                Přenesu stávající texty, fotografie a další obsah do nového
                webu. Kde je to potřeba, pomohu s úpravami textů, aby odpovídaly
                novému vizuálu i záměru stránek.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              6
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Testování na všech zařízeních
              </p>
              <p className="text-sm">
                Před spuštěním pečlivě otestuji zobrazení na mobilu, tabletu i
                počítači, rychlost načítání, funkčnost formulářů a správné
                chování na různých prohlížečích.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              7
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Spuštění s přesměrováním
              </p>
              <p className="text-sm">
                O spuštění se celé postarám – nasazení na doménu, nastavení
                přesměrování starých URL adres na nové, aby návštěvníci ani
                Google nic neztratili. SEO kontinuita je součástí, ne přídavek.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold leading-none text-brand-primary">
              8
            </div>
            <div>
              <p className="font-semibold text-foreground">Péče po spuštění</p>
              <p className="text-sm">
                Redesignem spolupráce nekončí. Jsem vám k dispozici pro drobné
                úpravy, sledování výkonu i další rozvoj webu. Nový web chcete
                rozvíjet, ne nechat znovu zestárnout.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <RefreshCw className="h-6 w-6 text-brand-primary" />
          Co vše redesign zahrnuje
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Search className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Analýza stávajícího webu
              </p>
              <p className="text-sm text-brand-text-soft">
                Pečlivý audit stávajícího stavu – UX, rychlost, obsah, mobilní
                zobrazení i analytická data.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Eye className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Nový vizuální styl a branding
              </p>
              <p className="text-sm text-brand-text-soft">
                Moderní vzhled sladěný s vaší značkou – barvy, typografie,
                ikonografie a celková atmosféra webu.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <LayoutTemplate className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Oprava UX a navigace
              </p>
              <p className="text-sm text-brand-text-soft">
                Nové rozvržení stránek tak, aby zákazník snadno našel co hledá a
                přirozeně dospěl k poptávce nebo nákupu.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <CheckCircle2 className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Přenos stávajícího obsahu
              </p>
              <p className="text-sm text-brand-text-soft">
                Texty, fotografie a dokumenty z původního webu přenesu do nového
                – nic se neztratí.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Zap className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">Zrychlení webu</p>
              <p className="text-sm text-brand-text-soft">
                Rychlost je součástí redesignu, ne volitelný doplněk.
                Optimalizuji načítání tak, aby web byl rychlý od prvního dne.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Globe2 className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Zachování SEO – přesměrování URL
              </p>
              <p className="text-sm text-brand-text-soft">
                Změna struktury webu nesmí smést vaše dosavadní pozice u Googlu.
                Přesměrování starých URL adres zajistím jako standardní součást
                spuštění.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Code2 className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Responzivní design
              </p>
              <p className="text-sm text-brand-text-soft">
                Web bude fungovat perfektně na všech zařízeních – telefon,
                tablet i počítač.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15">
              <Settings className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Testování a nasazení do provozu
              </p>
              <p className="text-sm text-brand-text-soft">
                Důkladné testování před spuštěním a celý proces nasazení na vaši
                doménu – bez stresu na vaší straně.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Users className="h-6 w-6 text-brand-primary" />
          Pro koho je redesign webu ideální
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Redesign se hodí ve dvou typických situacích:
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-brand-text-soft text-sm mb-3">
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">
              Firma nebo živnostník se starším webem
            </p>
            <p>
              Váš web funguje 3, 5 nebo 7 let, ale v posledních měsících
              vnímáte, že přestává přinášet výsledky. Zákazníci se zmínili, že
              web vypadá zastarale. Víte, že je čas na změnu, ale nechcete
              přijít o vše, co fungovalo. Přesně pro tuto situaci je redesign
              ideální volba.
            </p>
          </div>
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">
              Přechod ze šablony na profesionální web
            </p>
            <p>
              Začínali jste s Wixem, WordPress šablonou nebo jinou
              jednoduchoškoumou platformou – a to bylo správné rozhodnutí. Teď
              ale vaše podnikání přerostlo možnosti šablony a potřebujete web,
              který odráží skutečnou úroveň vaší práce a dokáže efektivně
              přivádět klienty.
            </p>
          </div>
        </div>
        <p className="text-brand-text-soft">
          Pokud se v jedné z těchto situací poznáváte, redesign bude
          pravděpodobně tím, co váš online výsledek posune vpřed.
        </p>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <AlertTriangle className="h-6 w-6 text-brand-primary" />
          Pro koho redesign vhodný není
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Redesign není vždy správná odpověď. V některých situacích doporučím
          spíše úplně nový web:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-sm text-brand-text-soft">
          {[
            "Váš byznys model se zásadně změnil a stávající web má zcela jiné zaměření, než potřebujete – v takovém případě nemá smysl stavět na starých základech.",
            "Potřebujete nové funkce nebo technologie, které stávající řešení vůbec nepodporuje a nelze je do něj rozumně doplnit.",
            "Stávající web je technicky v tak špatném stavu, že oprava by vyšla dráž než postavit vše znovu čistě.",
            "Hledáte velký korporátní portál s desítkami interních systémů a složitými procesy – tam pravděpodobně bude vhodnější větší agentura.",
          ].map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-xl bg-background/60 p-4"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/15">
                <ArrowRight size={13} className="text-brand-primary" />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-brand-text-soft">
          Vždy vám řeknu na rovinu, co situaci lépe řeší. Pokud redesign vaší
          situaci neodpovídá, mluvme raději o{" "}
          <a
            href="/sluzby/vyvoj-webu"
            className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-strong transition-colors"
          >
            vývoji webu na míru
          </a>
          .
        </p>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Zap className="h-6 w-6 text-brand-primary" />
          Jaká je cena za redesign webu
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Cena redesignu záleží na rozsahu stávajícího webu, počtu stránek,
          množství obsahu k přenosu a na tom, kolik nových funkcí potřebujete.
          Proto ji nestřílím od stolu, ale vždy připravuji na míru konkrétní
          situaci.
        </p>
        <p className="mb-3 text-brand-text-soft">
          Postup je jednoduchý: krátká nezávazná konzultace, kde projdeme váš
          stávající web a nové cíle. Poté vám navrhnu vhodné řešení a připravím
          přehlednou cenovou nabídku – budete přesně vědět, za co platíte a v
          jakém termínu.
        </p>
        <p className="text-brand-text-soft">
          Díky tomu společně najdeme variantu, která dává smysl z pohledu
          výsledku i vašeho rozpočtu.
        </p>
      </section>

      <section className="mb-4 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <CheckCircle2 className="h-6 w-6 text-brand-primary" />
          Spuštěním redesignu to nekončí
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Nový web potřebuje čas, sledování a průběžné ladění. Po spuštění se
          díváme na to, jak se zákazníci na webu chovají, co funguje a kde jsou
          ještě příležitosti ke zlepšení. Jsem vám k dispozici pro drobné
          úpravy, doplňování obsahu i větší rozvoj.
        </p>
        <p className="mb-4 text-brand-text-soft">
          Můžeme si domluvit jednorázové úpravy podle potřeby, nebo
          dlouhodobější spolupráci – váš redesignovaný web bude trvat déle než
          pár měsíců, pokud se o něj průběžně staráme.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary">
          <ArrowRight size={16} />
          <span>
            Domluvme si krátkou nezávaznou konzultaci o redesignu vašeho webu
          </span>
        </div>
      </section>
    </ServiceDetailTemplate>
  );
}
