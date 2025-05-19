import React from "react";
import { Link, useLocation } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const NAV_ITEMS = [
  { path: "/estudios", label: "Studies" },
  { path: "/tecnologias", label: "Technologies" },
  { path: "/proyectos", label: "Projects" }
];

interface PageNavProps {
  className?: string;
}

const PageNav: React.FC<PageNavProps> = ({ className = "" }) => {
  const location = useLocation();
  return (
    <nav className={`flex flex-col md:flex-row gap-4 mt-12 mb-12 animate-fade-in [animation-delay:300ms] justify-center items-center ${className}`} aria-label="Navegación de secciones">
      {NAV_ITEMS.filter(item => item.path !== location.pathname).map(item => (
        <Link key={item.path} to={item.path} aria-label={`Ir a ${item.label}`}>
          <InteractiveHoverButton>{item.label}</InteractiveHoverButton>
        </Link>
      ))}
    </nav>
  );
};

export default PageNav;