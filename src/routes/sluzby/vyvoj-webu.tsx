import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  DollarSign,
  Globe,
  LayoutTemplate,
  MessageCircle,
  User,
} from "lucide-react";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { createSeoHead } from "#/lib/seo/meta";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/vyvoj-webu")({
  head: () =>
    createSeoHead({
      title: "Vývoj webů na míru | Daniel Kroupa",
      description:
        "Tvorba moderních webových stránek na míru se zaměřením na výkon, SEO a konverze.",
      path: "/sluzby/vyvoj-webu",
    }),
  component: WebDevelopmentPage,
});

export function WebDevelopmentPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/vyvoj-webu"];

  return (
    <ServiceDetailTemplate title={service.title}>
      <section className="mb-10 grid gap-8 md:grid-cols-[2fr,1.4fr] items-start">
        <div className="space-y-4 text-lg leading-relaxed text-brand-text-soft">
          <p>
            Moderní web dnes není jen vizitka. Je to místo, kde se tvoří první
            dojem, přichází poptávky a rozhoduje se, jestli vám lidé dají šanci.
            Pomohu vám vytvořit web na míru, který bude vypadat profesionálně,
            bude srozumitelný pro vaše zákazníky a nebude vás brzdit v dalším
            růstu.
          </p>
          <p>
            Postarám se o celý proces od prvního nápadu až po spuštění a
            dlouhodobou péči. Nemusíte řešit agenturu, account manažery ani
            předávání mezi několika lidmi – vše probíhá přímo se mnou, jediným
            kontaktním člověkem, který má váš projekt v hlavě od začátku do
            konce.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          Proč mi svěřit vývoj vašeho webu
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-primary/15">
              <Code2 className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Zkušenosti z praxe
              </p>
              <p className="text-sm text-brand-text-soft">
                přes 4 roky zkušeností s weby pro malé firmy, živnostníky a
                tvůrci obsahu – vím, co v praxi funguje a co jsou jen módní
                výstřelky.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-secondary/15">
              <User className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Jeden člověk, jasná domluva
              </p>
              <p className="text-sm text-brand-text-soft">
                Nejste číslo jako v agentuře. Mluvíte přímo s člověkem, který
                váš web navrhuje i vyvíjí – bez zbytečného předávání a ztráty
                informací.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-primary/15">
              <MessageCircle className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Srozumitelná komunikace
              </p>
              <p className="text-sm text-brand-text-soft">
                Vysvětluji věci lidsky, bez zbytečné IT hantýrky. V každém kroku
                víte, co se děje, co bude následovat a co z toho budete mít.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-secondary/15">
              <Globe className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Web, který pracuje pro vás
              </p>
              <p className="text-sm text-brand-text-soft">
                Neřeším jen to, aby byl web „hezký“. Zaměřuji se na výsledky –
                poptávky, důvěru a jednodušší práci s vaším online podnikáním.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          Jak spolupráce probíhá – od nápadu po spuštění
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Aby vás v průběhu nic nepřekvapilo, celý proces mám rozdělený do
          několika jasných kroků. Díky tomu přesně víte, v jaké fázi se web
          nachází a co je zrovna potřeba.
        </p>
        <ol className="space-y-4 text-brand-text-soft">
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">Analýza potřeb</p>
              <p className="text-sm">
                Nejprve si spolu sedneme – online nebo osobně – a projdeme vaše
                podnikání, cílové zákazníky a cíle webu. Zajímá mě, co vám na
                stávajícím webu nevyhovuje, nebo co by měl nový web umět.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Návrh struktury a vzhledu
              </p>
              <p className="text-sm">
                Připravím návrh struktury webu a vizuální směr, který sedí vaší
                značce. Často pracuji s jednoduchými náhledy nebo prototypy,
                abyste si dokázali představit, jak bude web působit, ještě než
                začneme vyvíjet.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Analýza obsahu a klíčových slov
              </p>
              <p className="text-sm">
                Podívám se na to, co vaši zákazníci ve vyhledávačích skutečně
                hledají, a podle toho navrhnu strukturu obsahu i důležité texty.
                Důležité je, aby web dával smysl lidem a zároveň byl dobře
                čitelný pro Google.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">Vývoj webu</p>
              <p className="text-sm">
                Schválený návrh začnu převádět do funkčního webu. Zaměřuji se na
                rychlost, přehlednost a možnost budoucího rozšiřování.
                Pravidelně vám ukazuji průběžné verze (demo), abyste viděli, jak
                web roste.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              5
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Testování a ladění
              </p>
              <p className="text-sm">
                Před spuštěním vše pečlivě otestuji – zobrazení na mobilu,
                tabletu i počítači, rychlost načítání i fungování všech
                formulářů a funkcí. Cílem je, aby návštěvník neměl žádnou
                technickou překážku.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              6
            </div>
            <div>
              <p className="font-semibold text-foreground">Spuštění webu</p>
              <p className="text-sm">
                Jakmile je vše doladěné, připravím web ke spuštění na vaší
                doméně, zprovozním online a ověřím, že je vše dostupné a
                funkční. Od této chvíle váš web maká pro vás 24/7 a můžete ho
                naplno využít v marketingu.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-2">
            <div className="mt-1 text-4xl flex p-2 items-start justify-start rounded-full font-semibold text-brand-primary">
              7
            </div>
            <div>
              <p className="font-semibold text-foreground">Co se děje potom</p>
              <p className="text-sm">
                Spuštěním spolupráce nekončí. Podle domluvy se můžeme dlouhodobě
                starat o údržbu, drobné úpravy i větší rozvoj webu.
              </p>
            </div>
          </li>
        </ol>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-medium text-brand-primary">
          <Clock size={16} />
          <span>Obvyklá doba realizace: 3–6 týdnů podle rozsahu projektu</span>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Code2 className="h-6 w-6 text-brand-primary" />
          Co vše je v rámci vývoje webu zahrnuto
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Analýza požadavků a vizí
              </p>
              <p className="text-sm text-brand-text-soft">
                Pochopím vaše podnikání, zákazníky a cíle, aby web nebyl jen
                „hezká šablona“, ale skutečný nástroj pro vás.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Návrh struktury a UX
              </p>
              <p className="text-sm text-brand-text-soft">
                Rozvržení stránek a prvků tak, aby se návštěvník na webu
                neztrácel a snadno našel to, co hledá.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Vizuální návrh (UI)
              </p>
              <p className="text-sm text-brand-text-soft">
                Vzhled, barvy, typografie a celková atmosféra webu v souladu s
                vaší značkou.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Copywriting a konzultace textů
              </p>
              <p className="text-sm text-brand-text-soft">
                Pomohu vám s texty tak, aby byly srozumitelné, konkrétní a
                zaměřené na přínosy pro klienta.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">Základy SEO</p>
              <p className="text-sm text-brand-text-soft">
                Struktura, nadpisy a obsah, se kterým si lépe rozumí vyhledávače
                i vaši zákazníci.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Technická realizace
              </p>
              <p className="text-sm text-brand-text-soft">
                Převod návrhu do funkčního, rychlého a responzivního webu, který
                dobře funguje na všech zařízeních.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Měření návštěvnosti
              </p>
              <p className="text-sm text-brand-text-soft">
                Nasazení měření (například Google Analytics), abyste věděli, kdo
                na web chodí a odkud.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Nasazení do ostrého provozu
              </p>
              <p className="text-sm text-brand-text-soft">
                Postarám se o finální spuštění na vaší doméně a kontrolu
                funkčnosti.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div>
              <p className="font-semibold text-foreground">
                Následná správa a rozvoj
              </p>
              <p className="text-sm text-brand-text-soft">
                Dlouhodobá péče, aktualizace a rozšiřování webu podle toho, jak
                roste vaše podnikání.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <LayoutTemplate className="h-6 w-6 text-brand-primary" />
          Jaké typy webů pro klienty nejčastěji dělám
        </h2>
        <div className="grid gap-4 md:grid-cols-2 text-brand-text-soft text-sm">
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">
              Landing page pro jednu službu nebo akci
            </p>
            <p>
              Ideální, když chcete podpořit jednu konkrétní nabídku, sbírat
              poptávky nebo registrace. Přehledná, jednoznačně zaměřená stránka
              bez zbytečných rušivých prvků.
            </p>
          </div>
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">
              One-page firemní web
            </p>
            <p>
              Vše důležité na jednom místě – kdo jste, co děláte, proč si vybrat
              právě vás a jak vás kontaktovat. Skvělé pro freelancery, malé
              firmy a lokální služby.
            </p>
          </div>
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">
              Menší katalog služeb nebo produktů
            </p>
            <p>
              Pokud nabízíte více služeb nebo kategorií produktů, postavíme web
              tak, aby si návštěvník snadno našel to, co ho zajímá, a rychle se
              dostal k poptávce či nákupu.
            </p>
          </div>
          <div className="rounded-xl bg-background/60 p-4">
            <p className="mb-1 font-semibold text-foreground">Menší e-shop</p>
            <p>
              Pro menší až střední počet produktů, kde je důležitá jednoduchost,
              přehlednost a snadný nákupní proces – bez zbytečné složitosti
              velkých e-shopových řešení.
            </p>
          </div>
          <div className="rounded-xl bg-background/60 p-4 md:col-span-2">
            <p className="mb-1 font-semibold text-foreground">
              Webové platformy a portály na míru
            </p>
            <p>
              Když potřebujete něco specifičtějšího než běžný prezentační web –
              například členskou sekci, interní portál nebo jednodušší aplikaci,
              kterou zákazníci či klienti používají pravidelně.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <User className="h-6 w-6 text-brand-primary" />
          Pro koho je vývoj webu se mnou ideální
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Nejčastěji spolupracuji se živnostníky, menšími firmami, tvůrci obsahu
          a influencery nebo agenturami, které potřebují spolehlivého vývojáře
          „na míru“. Hodí se pro vás, pokud chcete mít vedle sebe partnera,
          který vám poradí, jak web uchopit, a zároveň ho umí celý zrealizovat.
        </p>
        <p className="text-brand-text-soft">
          Naopak, pokud hledáte obrovský korporátní portál s desítkami týmů a
          složitými procesy, pravděpodobně pro vás bude vhodnější velká
          agentura. U menších a středně velkých projektů vám ale dokážu
          nabídnout mnohem osobnější a pružnější přístup.
        </p>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <DollarSign className="h-6 w-6 text-brand-primary" />
          Jaká je cena za tvorbu webu
        </h2>
        <p className="mb-3 text-brand-text-soft">
          <b>Každý web je univerzální</b> – jiný rozsah, počet stránek, množství
          obsahu i speciálních funkcí. Proto cenu nestřílím „od stolu“, ale vždy
          ji připravuji na míru vašemu projektu a podnikání.
        </p>
        <p className="mb-3 text-brand-text-soft">
          Postup je jednoduchý: krátká nezávazná konzultace, kde probereme vaše
          představy a cíle, poté navrhnu vhodné řešení, rozsah webu a připravím
          přehlednou cenovou nabídku, kde uvidíte, za co přesně platíte.
        </p>
        <p className="mb-3 text-brand-text-soft">
          Díky tomu předem víte, s čím můžete počítat, a společně najdeme
          variantu, která dává smysl jak z pohledu výsledku, tak rozpočtu.
        </p>
        <p className=" text-brand-text-soft">
          Máte představu o rozpočtu? ale nejste si jistí, co vše za něj
          dostanete? Řeknu vám, jaké máte dostupné možnosti a pomůžu s
          přizpůsobením projektu vašim finančním možnostem.
        </p>
      </section>

      <section className="mb-4 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <CheckCircle2 className="h-6 w-6 text-brand-primary" />
          Spuštěním webu to nekončí
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Web není jednorázový projekt, který se „udělá a zapomene“. Po spuštění
          jsem vám k dispozici pro běžnou údržbu, drobné úpravy i větší rozvoj –
          například přidání nových sekcí, úpravy textů, vylepšení formulářů nebo
          napojení na další nástroje.
        </p>
        <p className="mb-4 text-brand-text-soft">
          Můžeme si domluvit jednorázové úpravy podle potřeby, nebo
          dlouhodobější spolupráci, kde se o web pravidelně starám. Vy tak máte
          jistotu, že váš web nezestárne během pár měsíců a bude se vyvíjet
          spolu s vaším podnikáním.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary">
          <ArrowRight size={16} />
          <span>Domluvme si krátkou nezávaznou konzultaci o vašem webu</span>
        </div>
      </section>
    </ServiceDetailTemplate>
  );
}
