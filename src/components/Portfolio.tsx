import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Modernizace webu",
    description:
      "Ze starého webu pro firmu BOMA Úklid s.r.o. jsem vytvořil moderní, rychlý a responzivní web s důrazem na uživatelskou přívětivost, který odpovídá moderním potřebám",
    image: "/img/boma-uklid-preview.webp",
    tech: ["Redesign", "SEO", "Responzivita", "HTPPS"],
    link: "https://boma.kvalitne.cz",
  },
  {
    title: "Zlepšení SEO pro web",
    description:
      "Firmě POMP STAV s.r.o jsem vylepšil SEO, aby stránky byly vidět v prvních příčkách výsledků vyhledávání (Google, Bing, Seznam, apod.).",
    image: "/img/pompstav-preview.webp",
    tech: ["SEO"],
    link: "https://pompstav.cz",
  },
  {
    title: "Prezentační web",
    description:
      "Vytvořil jsem pro živnostníka prezentační web pro zviditelnění jeho služeb v oblasti zednických prací.",
    image: "/img/zednik-zlin-preview.webp",
    tech: ["Vývoj webu"],
  },
  {
    title: "Prezentační web",
    description:
      "Díky spolupráci s klientem se přetvořila jeho vize mít online vizitku na funkční a moderní webovou prezentaci. Web nabízí psychologické služby, poradenství a možnost využití služeb formou objednávkového formuláře.",
    image: "/img/lukas-rihacek-preview.webp",
    tech: ["Vývoj webu", "Design", "SEO", "Responzivita"],
  },
];

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 transition-all hover:border-brand-secondary/45"
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          animate={{
            scale: hoveredIndex === index ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.image}
            width={250}
            height={125}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-background via-background/70 to-transparent">
          <div className="rounded-full bg-brand-primary p-4 text-primary-foreground">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold text-foreground transition-colors group-hover:text-brand-primary">
          {project.title}
        </h3>

        <p className="mb-4 leading-relaxed text-brand-text-soft">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 text-sm text-brand-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Projekty
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-brand-text-soft">
            Ukázka realizovaných projektů a prací, které pomohly klientům růst
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const key = `${project.title}-${index}`;

            if (!project.link) {
              return <div key={key}>{renderProjectCard(project, index)}</div>;
            }

            const isExternal = /^https?:\/\//.test(project.link);

            if (isExternal) {
              return (
                <a
                  key={key}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Otevřít projekt ${project.title}`}
                >
                  {renderProjectCard(project, index)}
                </a>
              );
            }

            return (
              <Link
                key={key}
                to={project.link as never}
                aria-label={`Přejít na projekt ${project.title}`}
              >
                {renderProjectCard(project, index)}
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
}
