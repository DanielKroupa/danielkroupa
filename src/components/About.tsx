import { motion } from "motion/react";
import { CheckCircle2, Zap, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Rychlý a efektivní vývoj",
    description:
      "Dodržování termínů a efektivní komunikace po celou dobu projektu.",
  },
  {
    icon: Shield,
    title: "Spolehlivost a kvalita",
    description: "Čistý kód, testování a důraz na detail v každém projektu.",
  },
  {
    icon: Heart,
    title: "Osobní přístup",
    description:
      "Každý projekt je unikátní a zaslouží si individuální přístup.",
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
              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM0OTc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web Developer"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-6 -bottom-6 rounded-2xl bg-linear-to-br from-brand-primary to-brand-secondary p-6 text-primary-foreground shadow-2xl"
            >
              <div className="text-4xl font-bold">8+</div>
              <div className="text-sm opacity-90">let zkušeností</div>
            </motion.div>
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
              Jsem Daniel a tvorbou webových stránek se zabývám komerčně již od
              roku 2018. Díky nasbíraným zkušenostem a proklientskému přístupu
              měním vize a řešení na skutečné fungující weby.
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
