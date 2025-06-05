import './App.css'
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Sun, Moon, Github, Linkedin, Mail, FileText } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { LinkPreview } from "@/components/ui/link-preview";
import HomePage from "@/components/pages/Home";
import Estudios from "@/components/pages/Estudios";
import Tecnologias from "@/components/pages/Tecnologias";
import Personal from "@/components/pages/Personal";
import Proyectos from "@/components/pages/Proyectos";
import "@/styles/global-cursor.css";

function ModeDockIcon() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  return (
    <button aria-label="Cambiar modo claro/oscuro" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Moon className="w-7 h-7" /> : <Sun className="w-7 h-7" />}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="relative min-h-screen w-full overflow-x-hidden">
          <RetroGrid lightLineColor='green' darkLineColor='green' className="fixed inset-0 w-full h-full -z-10" />
          <div className="relative z-10">
            {/* Aquí irá el contenido principal del portfolio */}
          </div>
          <div className="fixed bottom-0 left-0 w-full flex justify-center z-20 pb-4">
            <Dock className="shadow-lg">
              <DockIcon>
                <Link to="/" aria-label="Inicio">
                  <Home className="w-7 h-7" />
                </Link>
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
                  <a href="https://www.linkedin.com/in/ricardo-carreno-939b78338" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-7 h-7" />
                  </a>
                </LinkPreview>
              </DockIcon>
              <DockIcon>
                <a href="mailto:ricardocarremar@icloud.com" aria-label="Email">
                  <Mail className="w-7 h-7" />
                </a>
              </DockIcon>
              <DockIcon>
                <LinkPreview url="https://rxresu.me/rikicarre/cv" width={300} height={200}>
                  <a href="https://rxresu.me/rikicarre/cv" target="_blank" rel="noopener noreferrer" aria-label="CV">
                    <FileText className="w-7 h-7" />
                  </a>
                </LinkPreview>
              </DockIcon>
              <span className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
              <DockIcon>
                <ModeDockIcon />
              </DockIcon>
            </Dock>
          </div>
          <div className="relative z-10 w-full text-center">
            <Routes>
              <Route path="/" element={
                <>
                  <HomePage />
                  <div className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in [animation-delay:300ms]">
                    <Link to="/studies" aria-label="Go to Studies">
                      <InteractiveHoverButton>Studies</InteractiveHoverButton>
                    </Link>
                    <Link to="/technologies" aria-label="Go to Technologies">
                      <InteractiveHoverButton>Technologies</InteractiveHoverButton>
                    </Link>
                    <Link to="/projects" aria-label="Go to Projects">
                      <InteractiveHoverButton>Projects</InteractiveHoverButton>
                    </Link>
                  </div>
                </>
              } />
              <Route path="/studies" element={<Estudios />} />
              <Route path="/technologies" element={<Tecnologias />} />
              <Route path="/projects" element={<Proyectos />} />
              <Route path="/about" element={<Personal />} />
            </Routes>
          </div>
        </div>
      </Router>
      <SmoothCursor />
    </ThemeProvider>
  )
}

export default App
