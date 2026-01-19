import { BlurFade } from "@/components/magicui/blur-fade";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderKanban, Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  links: ProjectLink[];
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t('projects.items.municipal.title'),
      category: "Full-Stack",
      summary: t('projects.items.municipal.summary'),
      description: t('projects.items.municipal.description'),
      highlights: t('projects.items.municipal.highlights', { returnObjects: true }) as string[],
      stack: ["Python", "Django", "SQLite", "HTML"],
      image: "/images/inicio_rede.jpeg",
      links: [
        { label: t('projects.card.links'), url: "https://github.com/RIKICARRE/ReDe_TFG" },
        {
          label: t('projects.card.publication'),
          url: "https://www.linkedin.com/posts/ricardo-carreno-939b78338_tfg-ricardo-carre%C3%B1o-mari%C3%B1o-rede-activity-7405162023409385472-htR4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTj9j0BdtL40ztZ-kLvrFl6ZSwcvm1NbhE",
        },
      ],
    },
    {
      title: t('projects.items.mapyourworld.title'),
      category: "Full-Stack",
      summary: t('projects.items.mapyourworld.summary'),
      description: t('projects.items.mapyourworld.description'),
      highlights: t('projects.items.mapyourworld.highlights', { returnObjects: true }) as string[],
      stack: ["React", "Spring Boot", "PostgreSQL", "Mapbox"],
      image: "/images/logo_myw.png",
      links: [
        { label: t('projects.card.links'), url: "https://github.com/ISPP-Grupo-7/MapYourWorld" },
        { label: t('projects.card.landing'), url: "https://mapyourworld.netlify.app/" },
      ],
    },
    {
      title: t('projects.items.portfolio.title'),
      category: "Frontend",
      summary: t('projects.items.portfolio.summary'),
      description: t('projects.items.portfolio.description'),
      highlights: t('projects.items.portfolio.highlights', { returnObjects: true }) as string[],
      stack: ["React", "Vite", "Tailwind", "Framer Motion"],
      image: "/images/portfolio.png",
      links: [{ label: t('projects.card.links'), url: "https://github.com/RIKICARRE/portfolio_v2" }],
    },
    {
      title: t('projects.items.remote.title'),
      category: "Data Science",
      summary: t('projects.items.remote.summary'),
      description: t('projects.items.remote.description'),
      highlights: t('projects.items.remote.highlights', { returnObjects: true }) as string[],
      stack: ["Python", "MATLAB", "Remote Sensing"],
      image: "/images/t.png",
      links: [{ label: t('projects.card.links'), url: "https://github.com/RIKICARRE/Teledeteccion" }],
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10">
      <BlurFade>
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            {t('projects.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t('projects.title')}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
            {t('projects.description')}
          </p>
        </div>
      </BlurFade>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardContainer>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-6 shadow-xl">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={1} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10" />
                </div>
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <FolderKanban className="h-4 w-4 text-primary" />
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CardItem translateZ={30} className="w-20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                    </CardItem>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.summary}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <details className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                      {t('projects.card.details')}
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </details>

                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        <RainbowButton>
                          {link.label}
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </RainbowButton>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default ProjectsSection;
