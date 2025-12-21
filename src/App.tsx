import './App.css'
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Github, Linkedin, Mail } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ThemeProvider } from "@/components/theme-provider";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkPreview } from "@/components/ui/link-preview";
import { CVSelection } from "@/components/cv-selection";
import HomePage from "@/components/pages/Home";
import Estudios from "@/components/pages/Estudios";
import Tecnologias from "@/components/pages/Tecnologias";
import Proyectos from "@/components/pages/Proyectos";

import Snowfall from 'react-snowfall';

function ModeDockIcon() {
  return (
    <AnimatedThemeToggler className="w-7 h-7 flex items-center justify-center" />
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="relative min-h-screen w-full overflow-x-hidden">
          <Snowfall
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              zIndex: -5, // Above RetroGrid (-10) but behind content
            }} color='gray' speed={[1.0, 1.4]} snowflakeCount={90}
          />
          <RetroGrid lightLineColor='green' darkLineColor='green' className="fixed inset-0 w-full h-full -z-10" />
          <div className="relative w-full px-4 md:px-0">
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
                <CVSelection />
              </DockIcon>
              <span className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
              <DockIcon>
                <ModeDockIcon />
              </DockIcon>
            </Dock>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] w-full text-center">
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
                    <Link to="/projects" aria-label="Go to Projects" className="relative">
                      <InteractiveHoverButton>Projects</InteractiveHoverButton>
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse z-50">
                        NEW
                      </span>
                    </Link>
                  </div>
                </>
              } />
              <Route path="/studies" element={<Estudios />} />
              <Route path="/technologies" element={<Tecnologias />} />
              <Route path="/projects" element={<Proyectos />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
