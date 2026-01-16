import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap, Sparkles } from "lucide-react";

const educationTimeline = [
  {
    period: "2021 — 2025",
    title: "Grado en Ingeniería del Software",
    institution: "Universidad de Sevilla",
    status: "Finalizado",
    milestones: ["Arquitecturas modernas", "Ciberseguridad", "Desarrollo full-stack"],
    description:
      "Formación centrada en diseño de software, metodologías ágiles y construcción de soluciones escalables con foco en calidad.",
  },
  {
    period: "2020 — 2021",
    title: "Certificación de Inglés B2",
    institution: "Cambridge English",
    status: "Finalizado",
    milestones: ["Comunicación profesional", "Presentaciones", "Documentación técnica"],
    description:
      "Refuerzo de habilidades lingüísticas orientadas a contextos profesionales y técnicos.",
  },
  {
    period: "2019 — 2020",
    title: "Bachillerato en Ciencias",
    institution: "Colegio Marista Nuestra Señora del Carmen",
    status: "Finalizado",
    milestones: ["Pensamiento analítico", "Bases científicas", "Trabajo colaborativo"],
    description:
      "Especialización en ciencias con enfoque en pensamiento crítico y resolución de problemas.",
  },
];

const courses = [
  {
    title: "Especialización en Ciberseguridad",
    provider: "Plataforma online",
    status: "En curso",
    certified: false,
    description: "Actualización continua sobre detección de vulnerabilidades, OWASP y hardening.",
  },
  {
    title: "Docker & DevOps Fundamentals",
    provider: "Academia técnica",
    status: "Completado",
    certified: true,
    description: "Buenas prácticas de despliegue, orquestación y automatización.",
  },
  {
    title: "Arquitecturas Backend con Java",
    provider: "Bootcamp intensivo",
    status: "Completado",
    certified: true,
    description: "Diseño de APIs, pruebas automatizadas y seguridad en servicios.",
  },
];

const AboutSection = () => (
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10">
    <BlurFade>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <BoxReveal boxColor="#7C3AED">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre mí</h2>
          </BoxReveal>
          <p className="text-base md:text-lg text-muted-foreground">
            Soy <span className="font-semibold text-foreground">Ricardo Carreño</span>, graduado en Ingeniería del
            Software. Me enfoco en construir productos digitales seguros, usables y con arquitectura sólida, combinando
            desarrollo full-stack con una visión clara de negocio y seguridad.
          </p>
          <div className="space-y-3 text-sm md:text-base text-muted-foreground">
            <p>
              Mi objetivo es diseñar experiencias digitales que sean elegantes para el usuario y resistentes para el
              negocio, con especial interés en ciberseguridad y automatización.
            </p>
            <p>
              Actualmente sigo ampliando mi formación en seguridad, cloud y patrones de arquitectura modernos.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Full-stack", "Arquitectura", "Ciberseguridad", "Automatización"].map((tag) => (
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
                src="/images/ricardo.jpg"
                alt="Ricardo Carreño"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Sustituye <span className="font-semibold text-foreground">/public/images/ricardo.jpg</span> por tu foto
              personal.
            </p>
          </div>
        </div>
      </div>
    </BlurFade>

    <BlurFade>
      <section className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-8 shadow-xl">
        <ShineBorder shineColor={["#7C3AED", "#EC4899", "#22C55E"]} borderWidth={2} />
        <div className="mb-10 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold">Cronología de formación</h3>
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
          <h3 className="text-2xl font-semibold">Cursos y formación continua</h3>
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
                    Certificado
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500">
                    <Award className="h-3.5 w-3.5" />
                    Formativo
                  </span>
                )}
              </div>
              <p className="relative mt-4 text-sm text-muted-foreground">{course.description}</p>
              <span className="relative mt-4 inline-flex rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                {course.status}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </BlurFade>
  </div>
);

export default AboutSection;
