import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { HomeIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { RainbowButton } from "@/components/magicui/rainbow-button";

// Estructura de proyectos escalable
const proyectos = [
  {
    src: "src/assets/images/portfolio.png", // Cambia por la ruta de tu imagen
    title: "Portfolio Web",
    category: "Frontend",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-base text-muted-foreground">
          Mi portfolio personal desarrollado con React y Tailwind CSS. Incluye animaciones, dark mode y diseño responsive.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">React</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Tailwind</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Vite</span>
        </div>
        <div className="flex gap-2 mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Ver Web</RainbowButton>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repositorio</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  {
    src: "/logo.jpg",
    title: "App de Tareas",
    category: "Fullstack",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-base text-muted-foreground">
          Aplicación para gestionar tareas diarias, creada con Node.js y React. Permite añadir, editar y eliminar tareas.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Node.js</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">React</span>
        </div>
        <div className="flex gap-2 mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Ver Web</RainbowButton>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repositorio</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  // Agrega más proyectos aquí siguiendo la misma estructura
];

const Proyectos = () => (
  <BlurFade>
    <Breadcrumb>
      <BreadcrumbList className="bg-background rounded-md border px-3 py-2 shadow-xs mb-8 mt-8">
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/" className="text-muted-foreground">
                <HomeIcon size={16} aria-hidden="true" />
                <span className="sr-only">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Projects</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <section className="w-full max-w-5xl mx-auto mb-12 p-6 rounded-xl bg-card shadow-lg">
      <h4 className="text-xl font-bold mb-6">Proyectos</h4>
      {/* Carrusel de proyectos */}
      <Carousel
        items={proyectos.map((proyecto, idx) => (
          <Card key={proyecto.title} card={proyecto} index={idx} layout={true}/>
        ))}
      />
    </section>
  </BlurFade>
);

export default Proyectos;