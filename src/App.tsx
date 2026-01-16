import './App.css'
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Github, Home, Linkedin, Mail, FolderKanban, Cpu, User } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LinkPreview } from "@/components/ui/link-preview";
import { CVSelection } from "@/components/cv-selection";
import HomePage from "@/components/pages/Home";
import AboutSection from "@/components/sections/About";
import TechnologiesSection from "@/components/sections/Technologies";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

function ModeDockIcon() {
  return (
    <AnimatedThemeToggler className="w-7 h-7 flex items-center justify-center" />
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <RetroGrid lightLineColor='green' darkLineColor='green' className="fixed inset-0 w-full h-full -z-10" />

        <main className="relative z-10 flex flex-col gap-24 pb-32 pt-16">
          <section id="home" className="relative flex min-h-screen items-center justify-center px-4">
            <HomePage />
          </section>

          <section id="about" className="scroll-mt-24">
            <AboutSection />
          </section>

          <section id="technologies" className="scroll-mt-24">
            <TechnologiesSection />
          </section>

          <section id="projects" className="scroll-mt-24">
            <ProjectsSection />
          </section>

          <section id="contact" className="scroll-mt-24">
            <ContactSection />
          </section>
        </main>

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
              <a href="#technologies" aria-label="Tecnologías">
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
            <span className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
            <DockIcon>
              <LinkPreview url="https://github.com/RIKICARRE" width={300} height={200}>
                <a href="https://github.com/RIKICARRE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-7 h-7" />
                </a>
              </LinkPreview>
            </DockIcon>
            <DockIcon>
              <LinkPreview url="https://www.linkedin.com/in/ricardo-carreno-939b78338" width={300} height={200}>
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
              <CVSelection />
            </DockIcon>
            <span className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
            <DockIcon>
              <ModeDockIcon />
            </DockIcon>
          </Dock>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
