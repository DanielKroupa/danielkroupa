import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  Link,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/vylepseni-seo")({
  component: SeoImprovementsPage,
  head: () => ({
    meta: [
      {
        title: "Vylepšení SEO | Daniel Kroupa",
      },
    ],
  }),
});

export function SeoImprovementsPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/vylepseni-seo"];

  return (
    <ServiceDetailTemplate title={service.title}>
      <section className="mb-10 grid gap-8 md:grid-cols-[2fr,1.4fr] items-start">
        <div className="space-y-4 text-lg leading-relaxed text-brand-text-soft">
          <p>
            SEO není jednorázový zásah. Je to postupné ladění webu, aby vás
            Google ukazoval lidem, kteří hledají přesně to, co nabízíte. Dobře
            provedené SEO přivádí zákazníky, kteří aktivně hledají vaši službu –
            a to i ve chvíli, kdy vy spíte.
          </p>
          <p>
            Žádné složité reporty plné čísel, kterým nikdo nerozumí. Společně
            zjistíme, co na vašem webu chybí nebo brzdí, a budeme pracovat od
            věcí s největším dopadem. Jasně, srozumitelně a s měřitelnými
            výsledky.
          </p>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-foreground">
          Signály, že je čas řešit SEO
        </h2>
        <p className="mb-5 text-brand-text-soft">
          Pokud se vám některý z těchto bodů zdá povědomý, je čas se do toho
          pustit.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: <Search size={17} className="text-brand-primary" />,
              text: "Web existuje roky, ale z Googlu přichází jen hrstka návštěvníků",
            },
            {
              icon: <TrendingUp size={17} className="text-brand-primary" />,
              text: "Napíšete svoji službu do vyhledávače a váš web je na třetí nebo čtvrté stránce",
            },
            {
              icon: <Users size={17} className="text-brand-primary" />,
              text: "Konkurence vás předbíhá ve výsledcích, i když nabízíte lepší službu",
            },
            {
              icon: <BarChart2 size={17} className="text-brand-primary" />,
              text: "Po spuštění nového designu návštěvnost z vyhledávačů klesla",
            },
            {
              icon: <FileText size={17} className="text-brand-primary" />,
              text: "Nevíte, která klíčová slova vám skutečně přivádějí zákazníky",
            },
            {
              icon: <Settings size={17} className="text-brand-primary" />,
              text: "Meta popisy chybí, nadpisy jsou nekonzistentní nebo zkopírované ze šablony",
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
          Proč mi svěřit SEO vašeho webu
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-primary/15">
              <Search className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                SEO postavené na datech
              </p>
              <p className="text-sm text-brand-text-soft">
                Nepracuji na dojmu ani náhodě. Každé rozhodnutí vychází z
                analýzy – klíčová slova, konkurence, chování uživatelů a
                technický stav webu.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-secondary/15">
              <Users className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Jeden člověk, jasná domluva
              </p>
              <p className="text-sm text-brand-text-soft">
                Mluvíte přímo se mnou – bez prostředníků, account manažerů ani
                nekonečných e-mailových vláken. Vždy víte, co se děje a proč.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-primary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-primary/15">
              <TrendingUp className="text-brand-primary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Dlouhodobé výsledky, ne krátkodobé triky
              </p>
              <p className="text-sm text-brand-text-soft">
                Vyhýbám se praktikám, které mohou dočasně zlepšit čísla, ale
                dlouhodobě web poškozují. Stavím SEO, které vydrží a roste.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-brand-secondary/5 p-4">
            <div className="mt-1 flex h-fit w-fit p-2 items-center justify-center rounded-full bg-brand-secondary/15">
              <CheckCircle2 className="text-brand-secondary" size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                SEO propojené se zbytkem webu
              </p>
              <p className="text-sm text-brand-text-soft">
                Protože se starám i o vývoj a design, nevnímám SEO izolovaně.
                Řeším ho v kontextu celého webu – obsah, rychlost, strukturu i
                techniku dohromady.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Settings className="h-6 w-6 text-brand-primary" />
          Jak SEO spolupráce probíhá
        </h2>
        <p className="mb-4 text-brand-text-soft">
          Každý krok má svůj smysl a díky tomu víte, co se zrovna děje a co
          přijde jako další.
        </p>
        <ol className="space-y-4 text-brand-text-soft">
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">Vstupní SEO audit</p>
              <p className="text-sm">
                Projdu váš web technicky i obsahově – klíčová slova, struktura
                stránek, meta tagy, rychlost, interní prolinkování a pozice u
                Googlu oproti konkurenci.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">Stanovení priorit</p>
              <p className="text-sm">
                Z auditu vzejde jasný přehled – co má největší dopad, co lze
                opravit rychle a co je dlouhodobější práce. Začínám od věcí s
                největším efektem.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">Technické opravy</p>
              <p className="text-sm">
                Opravím meta tagy, nadpisy, URL strukturu, interní prolinkování
                a technické problémy, které Googlu brání správně web pochopit a
                indexovat.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              4
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Obsah a klíčová slova
              </p>
              <p className="text-sm">
                Upravím nebo doplním texty tak, aby cílily na správná klíčová
                slova a zároveň přesvědčovaly skutečné čtenáře – Google i
                zákazníci ocení totéž.
              </p>
            </div>
          </li>
          <li className="flex gap-3 rounded-xl bg-background/60 p-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-sm font-semibold text-brand-primary">
              5
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Sledování a průběžné ladění
              </p>
              <p className="text-sm">
                Nasadím nebo zkontroluji Google Search Console, sleduji výsledky
                a postupně ladit to, co funguje a co se mění v chování
                vyhledávačů i zákazníků.
              </p>
            </div>
          </li>
        </ol>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-medium text-brand-primary">
          <Clock size={16} />
          <span>
            Obvyklá délka spolupráce: 3–6 měsíců pro viditelné výsledky
          </span>
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <Search className="h-6 w-6 text-brand-primary" />
          Co zahrnuje práce na SEO
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <Search className="text-brand-primary" size={18} />,
              title: "Audit webu a analýza klíčových slov",
              desc: "Kompletní přehled o tom, kde web stojí a na která slova má smysl cílit.",
            },
            {
              icon: <FileText className="text-brand-primary" size={18} />,
              title: "Optimalizace meta tagů a nadpisů",
              desc: "Titulky, popisy a H1–H3 nastavené tak, aby Google i zákazníci pochopili, o čem stránka je.",
            },
            {
              icon: <Link className="text-brand-primary" size={18} />,
              title: "Technické SEO a interní prolinkování",
              desc: "Čisté URL adresy, správný odkaz mezi stránkami a oprava technických překážek pro indexaci.",
            },
            {
              icon: <Globe2 className="text-brand-primary" size={18} />,
              title: "Optimalizace textů pro vyhledávače",
              desc: "Texty, které přirozeně obsahují správná klíčová slova a zároveň přesvědčují čtenáře.",
            },
            {
              icon: <Settings className="text-brand-primary" size={18} />,
              title: "Nastavení Google Search Console",
              desc: "Propojení webu s Googlem, odesílání sitemapy a sledování chyb v indexaci.",
            },
            {
              icon: <BarChart2 className="text-brand-primary" size={18} />,
              title: "Průběžné sledování výsledků",
              desc: "Pravidelný přehled pozic, návštěvnosti a toho, co se zlepšuje – bez zbytečného žargonu.",
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

      <section className="mb-4 rounded-2xl border border-border bg-card/70 p-4 sm:p-5 md:p-8">
        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-foreground">
          <BarChart2 className="h-6 w-6 text-brand-primary" />
          Jaká je cena za SEO
        </h2>
        <p className="mb-3 text-brand-text-soft">
          Rozsah SEO práce závisí na aktuálním stavu vašeho webu, konkurenci ve
          vašem oboru a tom, jak rychle chcete výsledky vidět. Proto cenu vždy
          navrhuji po krátkém auditu – ne od oka.
        </p>
        <p className="mb-4 text-brand-text-soft">
          Začneme krátkou nezávaznou konzultací, kde mi řeknete, s čím bojujete.
          Já se podívám na web a navrhnu konkrétní postup s jasnou cenou, za co
          přesně platíte.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-2 text-sm font-medium text-brand-secondary">
          <ArrowRight size={16} />
          <span>Domluvme si krátkou nezávaznou konzultaci o vašem SEO</span>
        </div>
      </section>
    </ServiceDetailTemplate>
  );
}

