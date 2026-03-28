import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Image } from "@unpic/react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
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

  const scrollToProjects = () => {
    const element = document.getElementById("portfolio");
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
    <section className="relative flex items-center justify-center overflow-hidden py-10 md:py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-brand-surface to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-glow-primary blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-glow-secondary blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-5xl leading-tight font-bold text-foreground md:text-6xl"
            >
              Dodávám webové řešení, které{" "}
              <span className="text-brand-primary">přináší výsledky</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 text-xl leading-relaxed text-brand-text-soft"
            >
              Vytvářím moderní, rychlé a efektivní webové řešení na míru vašemu
              podnikání. Od prezentačních webů až po komplexní řešení.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={scrollToContact}
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-primary px-8 py-4 text-primary-foreground shadow-lg shadow-brand-primary/30 transition-all hover:scale-105 hover:bg-brand-primary-strong"
              >
                Nezávazná poptávka
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button
                onClick={scrollToProjects}
                className="group flex cursor-pointer items-center justify-center border-brand-primary border-2 text-foreground gap-2 rounded-lg px-8 py-4 shadow-lg transition-all hover:scale-105"
              >
                Ukázat projekty
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-8 text-sm text-muted-foreground"
            >
              <div>
                <div className="mb-1 text-3xl font-bold text-brand-primary">
                  10+
                </div>
                <div>Dokončených plánů</div>
              </div>
              <div>
                <div className="mb-1 text-3xl font-bold text-brand-secondary">
                  100%
                </div>
                <div>Spokojených klientů</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="xl:w-2/3 min-[1920px]:w-3/4 rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-8 shadow-2xl">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    width={480}
                    height={711}
                    src="/img/20260315_2039_Modern Web Developer_remix_01kksg394nep0btjsyq7gvsnse.png"
                    alt="Modern Web Dashboard"
                    className="block w-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-brand-secondary/15 mix-blend-screen" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-brand-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
