

import { BlurFade } from "@/components/magicui/blur-fade";
import { ShineBorder } from "@/components/magicui/shine-border";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { motion } from "framer-motion";
import { Atom, Cpu, ShieldCheck, Wand2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

const TechnologiesSection = () => {
  const { t } = useTranslation();

  const domains = [
    {
      title: t('technologies.domains.frontend.title'),
      description: t('technologies.domains.frontend.description'),
      icon: Wand2,
      stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      title: t('technologies.domains.backend.title'),
      description: t('technologies.domains.backend.description'),
      icon: Cpu,
      stack: ["Java", "Spring Boot", "Python", "SQL"],
    },
    {
      title: t('technologies.domains.cybersecurity.title'),
      description: t('technologies.domains.cybersecurity.description'),
      icon: ShieldCheck,
      stack: ["OWASP", "Cryptography", "Hardening", "Auditoría"],
    },
    {
      title: t('technologies.domains.devops.title'),
      description: t('technologies.domains.devops.description'),
      icon: Atom,
      stack: ["Docker", "GitHub", "Azure", "Bash"],
    },
  ];

  const techCloud = [
    "React",
    "Vite",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "SQL",
    "MySQL",
    "Docker",
    "Azure",
    "Selenium",
    "SonarQube",
    "MATLAB",
    "Criptografía",
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10">
      <BlurFade>
        <div className="text-center">
          <VelocityScroll
            numRows={1}
            defaultVelocity={3}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            {t('technologies.title')}
          </VelocityScroll>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
            {t('technologies.description')}
          </p>
        </div>
      </BlurFade>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {domains.map((domain, index) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-emerald-500/10" />
              </div>
              <div className="relative space-y-4">
                <domain.icon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{domain.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{domain.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <BlurFade>
          <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} />
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{t('technologies.carousel.title')}</h3>
                <p className="text-xs text-muted-foreground">{t('technologies.carousel.subtitle')}</p>
              </div>
            </div>
            <LogoCarousel columns={3} />
            <div className="mt-6 flex flex-wrap gap-2">
              {techCloud.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </BlurFade>
      </div>
    </div>
  );
};

export default TechnologiesSection;
