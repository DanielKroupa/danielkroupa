import { createFileRoute } from "@tanstack/react-router";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({ component: FAQPage });

const faqs = [
  {
    question: "Jak dlouho trvá vývoj webu?",
    answer:
      "Záleží na rozsahu projektu. Jednoduchý landing page je hotový za 1-2 týdny, komplexní firemní web za 3-4 týdny a webová aplikace může trvat 6-12 týdnů. Po analýze vašich požadavků vám poskytnu přesný časový odhad.",
  },
  {
    question: "Kolik stojí vytvoření webu?",
    answer:
      "Cena závisí na rozsahu a složitosti projektu. Jednoduchá landing page od 15 000 Kč, firemní web od 35 000 Kč, komplexní webové aplikace individuálně. Po konzultaci vám připravím cenovou nabídku přesně na míru vašim potřebám.",
  },
  {
    question: "Budou webové stránky responzivní?",
    answer:
      "Ano, všechny weby vytvářím jako plně responzivní, což znamená, že perfektně fungují na všech zařízeních - počítače, tablety i mobilní telefony. To je dnes naprosto nezbytné pro dobrou uživatelskou zkušenost i SEO.",
  },
  {
    question: "Potřebuji připravit nějaké podklady?",
    answer:
      "Základní podklady jako logo, texty a případné fotografie určitě pomohou urychlit projekt. Pokud je nemáte, není problém - pomohu vám s copywritingem a také mohu doporučit kvalitní stock fotografie nebo fotografy.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "1) Konzultace a analýza potřeb, 2) Vytvoření návrhu struktury a designu ke schválení, 3) Vývoj webu s průběžnými aktualizacemi, 4) Testování a úpravy podle feedbacku, 5) Spuštění a předání webu. Po celou dobu máte přehled o postupu.",
  },
  {
    question: "Můžu web později sám upravovat?",
    answer:
      "Ano! Pro většinu projektů nastavuji jednoduché administrační rozhraní (CMS), kde můžete snadno upravovat texty, přidávat články nebo měnit fotografie. Vše vás naučím a poskytuji dokumentaci.",
  },
  {
    question: "Zahrnuje cena i hosting a doménu?",
    answer:
      "První rok hostingu a domény je většinou zahrnutý v ceně. Následně záleží na typu serveru a vašich potřebách - obvykle 2000-5000 Kč ročně. Mohu vše zařídit nebo vám poradit s výběrem poskytovatele.",
  },
  {
    question: "Poskytujete technickou podporu?",
    answer:
      "Ano, po spuštění poskytuji technickou podporu a údržbu. Můžeme se dohodnout na jednorázových úpravách nebo pravidelné měsíční údržbě, která zahrnuje aktualizace, zálohy a průběžné vylepšování.",
  },
  {
    question:
      "Jak zajistíte, že web bude optimalizovaný pro vyhledávače (SEO)?",
    answer:
      "SEO optimalizace je standardní součástí každého projektu. Zahrnuje technické SEO (rychlost, struktura, meta tagy), responzivitu, optimalizaci obrázků a další best practices. Pro pokročilé SEO mohu doporučit specialisty.",
  },
  {
    question: "Mohu vidět ukázky vašich prací?",
    answer:
      "Samozřejmě! V sekci Portfolio na hlavní stránce najdete ukázky realizovaných projektů. Během konzultace vám rád ukážu další projekty, které odpovídají vašim představám a oboru podnikání.",
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Často kladené otázky
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
              Odpovědi na nejčastější otázky o tvorbě webů a spolupráci
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-muted/40"
                >
                  <span className="pr-4 text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={24} className="text-brand-secondary" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 leading-relaxed text-brand-text-soft">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 rounded-2xl border border-brand-secondary/30 bg-linear-to-br from-brand-secondary/10 to-brand-primary/10 p-8 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Nenašli jste odpověď?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Neváhejte mě kontaktovat s jakýmkoliv dotazem. Rád vám odpovím a
              pomohu s vašim projektem.
            </p>
            <a
              href="/#kontakt"
              className="inline-block rounded-lg bg-brand-primary px-8 py-4 text-primary-foreground shadow-lg shadow-brand-primary/30 transition-all hover:scale-105 hover:bg-brand-primary-strong"
            >
              Kontaktovat
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
