import { motion } from "motion/react";
import { BookOpen, Coffee, Smile } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Nejlépe přemýšlím v klidu",
    description:
      "Dobrý čaj, čistá hlava a prostor na soustředění dělají zásadní rozdíl.",
  },
  {
    icon: BookOpen,
    title: "Mám rád jednoduchost",
    description:
      "Věci bez zbytečného chaosu mi dávají smysl v práci i běžném dni.",
  },
  {
    icon: Smile,
    title: "Lidskost je pro mě základ",
    description:
      "Férovost, upřímnost a humor beru jako přirozenou součást spolupráce.",
  },
];

export function AboutSection() {
  return (
    <section
      id="o-mne"
      className="relative overflow-hidden bg-background py-12"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-glow-primary blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM0OTc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrét Daniela"
                className="rounded-2xl shadow-2xl"
              /> */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              O mně
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-brand-text-soft">
              Jmenuji se Daniel. Ve volném čase se věnuji čtení a fitness, které
              mě udržuje v kondici. Věřím, že když si lidé sednou po lidské
              stránce, jde všechno ostatní mnohem snáz.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15">
                      <Icon size={24} className="text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-brand-text-soft">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
