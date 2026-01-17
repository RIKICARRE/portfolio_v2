import './App.css'
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Cpu,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LinkPreview } from "@/components/ui/link-preview";
import { CVSelection } from "@/components/cv-selection";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const learningJourney = [
  {
    period: "2021 · 2025",
    title: "Grado en Ingeniería del Software",
    institution: "Universidad de Sevilla",
    description:
      "Formación integral en arquitectura de software, metodologías ágiles, seguridad y diseño de productos digitales.",
    focus: ["Full-stack", "Arquitectura", "Metodologías ágiles"],
  },
  {
    period: "2020",
    title: "B2 English",
    institution: "Cambridge English",
    description:
      "Certificación oficial de inglés con énfasis en comunicación profesional y comprensión técnica.",
    focus: ["Certificación", "Comunicación"],
  },
  {
    period: "2019 · 2021",
    title: "Bachillerato Tecnológico",
    institution: "Maristas Ntra. Sra. del Carmen",
    description:
      "Base sólida en pensamiento crítico, matemáticas aplicadas y ciencias para la ingeniería.",
    focus: ["Bases STEM", "Pensamiento crítico"],
  },
];

const trainingPaths = [
  {
    title: "Cursos con certificado",
    description:
      "Formaciones que incluyen acreditación oficial y evidencias verificables.",
    items: [
      {
        name: "Especialización en Ciberseguridad",
        provider: "(Añadir plataforma)",
        status: "Certificado",
      },
      {
        name: "Arquitectura Cloud (Azure)",
        provider: "(Añadir plataforma)",
        status: "Certificado",
      },
    ],
  },
  {
    title: "Cursos formativos",
    description:
      "Aprendizaje continuo para mantenerme actualizado en stacks y buenas prácticas.",
    items: [
      {
        name: "Testing avanzado con Python",
        provider: "(Añadir plataforma)",
        status: "Formativo",
      },
      {
        name: "React avanzado y performance",
        provider: "(Añadir plataforma)",
        status: "Formativo",
      },
    ],
  },
];

const techPillars = [
  {
    title: "Experiencia Frontend",
    description:
      "Interfaces modernas, accesibles y rápidas, con animaciones y microinteracciones que elevan la experiencia.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    description:
      "Servicios robustos con foco en seguridad, arquitectura limpia y automatización.",
    tools: ["Java", "Spring Boot", "Python", "Django", "SQL"],
  },
  {
    title: "DevOps & Calidad",
    description:
      "Entrega confiable con pipelines, testing y observabilidad para productos escalables.",
    tools: ["Docker", "GitHub", "SonarQube", "pytest"],
  },
  {
    title: "Data & Security",
    description:
      "Análisis de datos, criptografía y seguridad web orientada a productos seguros.",
    tools: ["MATLAB", "Criptografía", "OWASP", "TLS"],
  },
];

const floatingTags = [
  "React",
  "Spring Boot",
  "TypeScript",
  "Django",
  "Docker",
  "Azure",
  "SQL",
  "Python",
  "Framer Motion",
  "Seguridad",
  "Testing",
  "GitHub",
];

const projects = [
  {
    title: "ReDe · Gestión deportiva municipal",
    summary:
      "Plataforma full-stack para reservas y administración de instalaciones deportivas, pensada para municipios pequeños.",
    highlights: [
      "Arquitectura monolítica con Django y SQLite",
      "Paneles de gestión y flujos de reservas optimizados",
      "Proyecto final de grado con impacto real",
    ],
    stack: ["Python", "Django", "HTML", "SQLite"],
    image: "/images/inicio_rede.jpeg",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/RIKICARRE/ReDe_TFG",
      },
      {
        label: "Post en LinkedIn",
        href: "https://www.linkedin.com/posts/ricardo-carreno-939b78338_tfg-ricardo-carre%C3%B1o-mari%C3%B1o-rede-activity-7405162023409385472-htR4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTj9j0BdtL40ztZ-kLvrFl6ZSwcvm1NbhE",
      },
    ],
  },
  {
    title: "Portfolio v2",
    summary:
      "Experiencia web personal con diseño experimental, dark mode y animaciones inspiradas en interfaces de producto.",
    highlights: [
      "Componentes reutilizables con Tailwind",
      "Animaciones suaves para navegación y secciones",
      "Enfoque mobile-first",
    ],
    stack: ["React", "Vite", "Tailwind", "TypeScript"],
    image: "/images/portfolio.png",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/RIKICARRE/portfolio_v2",
      },
    ],
  },
  {
    title: "MapYourWorld",
    summary:
      "Plataforma geolocalizada con gamificación para descubrir y compartir lugares en equipo.",
    highlights: [
      "Frontend React + backend Spring Boot",
      "Gamificación y logros en tiempo real",
      "Integración Mapbox",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "Mapbox"],
    image: "/images/myw.jpg",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/ISPP-Grupo-7/MapYourWorld",
      },
      {
        label: "Web",
        href: "https://mapyourworld.netlify.app/",
      },
    ],
  },
  {
    title: "CriptoG",
    summary:
      "Proyecto académico para cifrado de imágenes médicas con técnicas de difusión y scrambling.",
    highlights: [
      "Algoritmos RSA/AES",
      "Aplicación web con enfoque en seguridad",
      "Informe técnico completo",
    ],
    stack: ["Python", "Criptografía", "Seguridad"],
    image: "/images/cripto.png",
    links: [
      {
        label: "Repositorio",
        href: "https://github.com/pabolimor99/CriptoG-14",
      },
      {
        label: "Paper",
        href: "https://github.com/pabolimor99/CriptoG-14/blob/main/doc/Proyecto_C.pdf",
      },
    ],
  },
];

function ModeDockIcon() {
  return (
    <AnimatedThemeToggler className="w-7 h-7 flex items-center justify-center" />
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <RetroGrid
          lightLineColor="green"
          darkLineColor="green"
          className="fixed inset-0 w-full h-full -z-10"
        />

        <div className="fixed bottom-0 left-0 w-full flex justify-center z-20 pb-4">
          <Dock className="shadow-lg">
            <DockIcon>
              <a href="#home" aria-label="Inicio">
                <Home className="w-7 h-7" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="#about" aria-label="Sobre mí">
                <User className="w-7 h-7" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="#tech" aria-label="Tecnologías">
                <Cpu className="w-7 h-7" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="#projects" aria-label="Proyectos">
                <FolderKanban className="w-7 h-7" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="#contact" aria-label="Contacto">
                <Mail className="w-7 h-7" />
              </a>
            </DockIcon>
            <span
              className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700"
              aria-hidden="true"
            ></span>
            <DockIcon>
              <LinkPreview url="https://github.com/RIKICARRE" width={300} height={200}>
                <a
                  href="https://github.com/RIKICARRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-7 h-7" />
                </a>
              </LinkPreview>
            </DockIcon>
            <DockIcon>
              <LinkPreview
                url="https://www.linkedin.com/in/ricardo-carreno-939b78338"
                width={300}
                height={200}
              >
                <a
                  href="https://www.linkedin.com/in/ricardo-carreno-939b78338"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              </LinkPreview>
            </DockIcon>
            <DockIcon>
              <a
                href="mailto:ricardocarremar@icloud.com"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </a>
            </DockIcon>
            <DockIcon>
              <CVSelection />
            </DockIcon>
            <span
              className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700"
              aria-hidden="true"
            ></span>
            <DockIcon>
              <ModeDockIcon />
            </DockIcon>
          </Dock>
        </div>

        <main className="relative z-10 flex flex-col items-center w-full">
          <section
            id="home"
            className="relative min-h-screen w-full max-w-6xl px-6 md:px-10 flex flex-col items-center justify-center text-center"
          >
            <BlurFade>
              <WordRotate
                words={[
                  "Hola",
                  "Hello",
                  "Bonjour",
                  "Ciao",
                  "Hallo",
                  "Olá",
                  "こんにちは",
                  "안녕하세요",
                  "你好",
                  "Привет",
                ]}
                className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in"
              />
              <h2 className="text-xl md:text-3xl font-semibold mb-3 animate-fade-in [animation-delay:100ms]">
                Soy <AuroraText>Ricardo Carreño</AuroraText>
              </h2>
              <p className="text-base md:text-xl font-normal text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in [animation-delay:200ms]">
                Ingeniero de software especializado en full-stack, seguridad y experiencias digitales con un enfoque profesional.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in [animation-delay:300ms]">
                Esta portada es el punto de partida para conocer mi trayectoria, tecnología favorita y proyectos más destacados.
              </p>
            </BlurFade>
            <div className="scroll-hint">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
                Sigue bajando
              </span>
              <div className="flex flex-col items-center gap-1">
                <span className="scroll-arrow"></span>
                <span className="scroll-arrow scroll-arrow--mid"></span>
                <span className="scroll-arrow scroll-arrow--fast"></span>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="w-full max-w-6xl px-6 md:px-10 py-20 scroll-mt-24"
          >
            <VelocityScroll
              numRows={1}
              defaultVelocity={2.4}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12"
            >
              Sobre mí · Sobre mí · Sobre mí
            </VelocityScroll>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl">
                  <ShineBorder
                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderWidth={2}
                  />
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-muted/60 via-muted/20 to-muted/80 flex items-center justify-center text-sm text-muted-foreground">
                    Añade tu foto aquí
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-semibold">Ricardo Carreño</h3>
                  <p className="text-muted-foreground">
                    Desarrollador full-stack con mentalidad de producto, obsesionado con la calidad, la seguridad y la experiencia de usuario.
                  </p>
                  <p className="text-muted-foreground">
                    Me muevo entre Java, Python y React para construir soluciones útiles, escalables y con propósito.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">Cronología evolutiva</h4>
                  <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-border before:to-transparent">
                    {learningJourney.map((item) => (
                      <div key={item.title} className="relative pl-10">
                        <span className="absolute left-0 top-2 h-6 w-6 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <div className="rounded-2xl border border-border/60 bg-background/60 p-5 shadow-sm">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="text-lg font-semibold">{item.title}</h5>
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mt-3">
                            {item.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.focus.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {trainingPaths.map((path) => (
                    <div
                      key={path.title}
                      className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg"
                    >
                      <h5 className="text-lg font-semibold mb-2">{path.title}</h5>
                      <p className="text-sm text-muted-foreground mb-4">
                        {path.description}
                      </p>
                      <div className="space-y-3">
                        {path.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/50 px-4 py-3"
                          >
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.provider}
                              </p>
                            </div>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${
                                item.status === "Certificado"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="tech"
            className="w-full max-w-6xl px-6 md:px-10 py-20 scroll-mt-24"
          >
            <div className="flex flex-col gap-6 items-start">
              <VelocityScroll
                numRows={1}
                defaultVelocity={2.8}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Tecnologías · Tecnologías · Tecnologías
              </VelocityScroll>
              <p className="text-muted-foreground max-w-2xl">
                Mi stack evoluciona con cada proyecto. Combino herramientas modernas con procesos de calidad para construir experiencias sólidas y seguras.
              </p>
            </div>

            <div className="relative mt-10 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl overflow-hidden">
              <ShineBorder
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderWidth={2}
              />
              <LogoCarousel columns={4} />
              <div className="absolute inset-0 pointer-events-none">
                {floatingTags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`floating-tag floating-tag--${index % 3}`}
                    style={{
                      top: `${10 + (index * 12) % 70}%`,
                      left: `${5 + (index * 14) % 80}%`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {techPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group rounded-3xl border border-border/60 bg-background/70 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{pillar.title}</h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Focus
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {pillar.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs transition-colors duration-300 group-hover:bg-primary/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="w-full max-w-6xl px-6 md:px-10 py-20 scroll-mt-24"
          >
            <div className="flex flex-col gap-6 items-start">
              <VelocityScroll
                numRows={1}
                defaultVelocity={2.2}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Proyectos · Proyectos · Proyectos
              </VelocityScroll>
              <p className="text-muted-foreground max-w-2xl">
                Cada proyecto es una historia de producto, con retos técnicos y decisiones de diseño. Aquí tienes una selección curada con contexto y enlaces directos.
              </p>
            </div>

            <div className="mt-10 grid gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          Destacado
                        </span>
                      </div>
                      <p className="text-muted-foreground">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <RainbowButton>{link.label}</RainbowButton>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 p-4">
                      <img
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        className="h-full w-full rounded-xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="w-full max-w-6xl px-6 md:px-10 py-20 scroll-mt-24"
          >
            <div className="flex flex-col gap-6 items-start">
              <VelocityScroll
                numRows={1}
                defaultVelocity={2.4}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Contacto · Contacto · Contacto
              </VelocityScroll>
              <p className="text-muted-foreground max-w-2xl">
                Si quieres colaborar, hablar de oportunidades o simplemente conectar, aquí tienes mis canales principales.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <a
                href="mailto:ricardocarremar@icloud.com"
                className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      Email
                    </p>
                    <p className="text-base font-semibold">ricardocarremar@icloud.com</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-carreno-939b78338"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      LinkedIn
                    </p>
                    <p className="text-base font-semibold">Perfil profesional</p>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/RIKICARRE"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      GitHub
                    </p>
                    <p className="text-base font-semibold">Repositorio y proyectos</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
