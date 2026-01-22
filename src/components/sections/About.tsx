

import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap, Sparkles, Globe, Linkedin } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  const educationTimeline = [
    {
      period: "2021 — 2025",
      title: t('about.timeline.degree.title'),
      institution: t('about.timeline.degree.institution'),
      status: t('about.timeline.degree.status'),
      milestones: t('about.timeline.degree.milestones', { returnObjects: true }) as string[],
      description: t('about.timeline.degree.description'),
    },
    {
      period: "2020",
      title: t('about.timeline.english.title'),
      institution: t('about.timeline.english.institution'),
      status: t('about.timeline.english.status'),
      milestones: t('about.timeline.english.milestones', { returnObjects: true }) as string[],
      description: t('about.timeline.english.description'),
    },
    {
      period: "2019 — 2021",
      title: t('about.timeline.baccalaureate.title'),
      institution: t('about.timeline.baccalaureate.institution'),
      status: t('about.timeline.baccalaureate.status'),
      milestones: t('about.timeline.baccalaureate.milestones', { returnObjects: true }) as string[],
      description: t('about.timeline.baccalaureate.description'),
    },
  ];

  const courses = [
    {
      title: t('about.courses.aws.title'),
      provider: t('about.courses.aws.provider'),
      status: t('about.courses.aws.status'),
      certified: false,
      description: t('about.courses.aws.description'),
      link: "https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-espaol-de-espaa/22YKTHGJVW",
      linkedin: "https://www.linkedin.com/in/ricardo-carreno-939b78338/overlay/1766437097144/single-media-viewer?type=DOCUMENT&profileId=ACoAAFTj9j0BdtL40ztZ-kLvrFl6ZSwcvm1NbhE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Be8yVZQtFRvC7%2BJZ3DSVBBA%3D%3D",
    },
    {
      title: t('about.courses.cisco.title'),
      provider: t('about.courses.cisco.provider'),
      status: t('about.courses.cisco.status'),
      certified: true,
      description: t('about.courses.cisco.description'),
      link: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=es-XL",
      //linkedin: "https://www.linkedin.com/in/ricardocarrenocl/",
    },
    {
      title: t('about.courses.comptia.title'),
      provider: t('about.courses.comptia.provider'),
      status: t('about.courses.comptia.status'),
      certified: false,
      description: t('about.courses.comptia.description'),
      link: "https://www.ciberext.es/cursos.php",
      //linkedin: "https://www.linkedin.com/in/ricardocarrenocl/",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10">
      <BlurFade>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <BoxReveal boxColor="#7C3AED">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('about.title')}</h2>
            </BoxReveal>
            <p className="text-base md:text-lg text-muted-foreground">
              <Trans i18nKey="about.intro">
                Soy <span className="font-semibold text-foreground">Ricardo Carreño</span>, graduado en Ingeniería del
                Software. Me enfoco en construir productos digitales seguros, usables y con arquitectura sólida, combinando
                desarrollo full-stack con una visión clara de negocio y seguridad.
              </Trans>
            </p>
            <div className="space-y-3 text-sm md:text-base text-muted-foreground">
              <p>
                {t('about.goal')}
              </p>
              <p>
                {t('about.learning')}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[t('about.tags.fullstack'), t('about.tags.architecture'), t('about.tags.cybersecurity'), t('about.tags.automation')].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-emerald-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-4 shadow-xl backdrop-blur">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-dashed border-border/60 bg-muted/40">
                <img
                  src="/images/ricardo.jpeg"
                  alt="Ricardo Carreño"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade>
        <section className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-8 shadow-xl">
          <ShineBorder shineColor={["#7C3AED", "#EC4899", "#22C55E"]} borderWidth={2} />
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">{t('about.timeline.title')}</h3>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
            <div className="space-y-8">
              {educationTimeline.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  <span className="absolute left-[9px] top-5 flex h-3 w-3 items-center justify-center rounded-full bg-primary shadow-[0_0_0_6px_rgba(124,58,237,0.2)]" />
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full border border-border/60 px-2 py-0.5">{item.period}</span>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{item.status}</span>
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.milestones.map((milestone) => (
                        <span
                          key={milestone}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {milestone}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade>
        <section className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-8 shadow-xl">
          <ShineBorder shineColor={["#22C55E", "#14B8A6", "#3B82F6"]} borderWidth={2} />
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">{t('about.courses.title')}</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10" />
                </div>
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                  {course.certified ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {t('about.courses.badges.certified')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500">
                      <Award className="h-3.5 w-3.5" />
                      {t('about.courses.badges.formative')}
                    </span>
                  )}
                </div>
                <p className="relative mt-4 text-sm text-muted-foreground">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="relative inline-flex rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                    {course.status}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                      aria-label="Course Website"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                    {course.linkedin && (
                      <a
                        href={course.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-2 rounded-lg bg-[#0077b5]/10 px-3 py-2 text-xs font-medium text-[#0077b5] transition-colors hover:bg-[#0077b5]/20"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </BlurFade>
    </div>
  );
};

export default AboutSection;
