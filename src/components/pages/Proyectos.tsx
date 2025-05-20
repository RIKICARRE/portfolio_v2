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
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ShineBorder } from "@/components/magicui/shine-border";
import { CardContainer, CardItem } from "@/components/ui/3d-card";

// Estructura de proyectos escalable
const proyectos = [
  {
    src: "/images/portfolio.png",
    title: "Portfolio Web",
    category: "Frontend",
    content: (
      <div className="flex flex-col gap-8">
        {/* Etiquetas y botones */}
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">React</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Tailwind CSS</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Vite</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Framer Motion</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">TypeScript</span>
        </div>
        {/* Introducción */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Modern Portfolio Website</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Showcase your skills with style.</span> This portfolio is built with React, Tailwind CSS, and Framer Motion, featuring smooth animations, dark mode, and a mobile-first design inspired by Apple.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/portfolio.png"
            alt="Portfolio preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl shadow-lg"
          />
          </CardItem>
          </CardContainer>
        </div>
        {/* Studies */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Academic Background</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Continuous learning and growth.</span> My studies focus on software engineering, technology, and personal development to achieve excellence in the field.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/studies.png"
            alt="Portfolio preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl"
          />
          </CardItem>
          </CardContainer>
        </div>
        {/* Projects */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Highlighted Projects</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Explore my featured work.</span> Discover a selection of projects that demonstrate my technical expertise and creativity in software development.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/projects.png"
            alt="Portfolio preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl"
          />
          </CardItem>
          </CardContainer>
        </div>
        {/* Technologies */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Technologies & Tools</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Modern stack for modern solutions.</span> I use up-to-date technologies and tools to deliver efficient, scalable, and visually appealing digital products.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/tech.png"
            alt="Portfolio preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl"
          />
          </CardItem>
          </CardContainer>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <RainbowButton>View Website</RainbowButton>
          </a> */}
          <a href="https://github.com/RIKICARRE/portfolio_v2" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repository</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  {
    src: "/images/t.png",
    title: "Remote Sensing Project",
    category: "Data Science",
    content: (
      <div className="flex flex-col gap-8">
        {/* Tags and buttons */}
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Python</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">MATLAB</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Remote Sensing</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Satellite Imagery</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Data Analysis</span>
        </div>
        {/* Introduction */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Satellite Image Processing & Analysis</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Automated extraction of environmental information from satellite data.</span> This project focuses on the processing and analysis of multispectral satellite images using Python and MATLAB. It includes NDVI calculation, atmospheric correction, and land cover classification, enabling efficient monitoring of vegetation and environmental changes.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/t.png"
            alt="Remote Sensing Project preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl shadow-lg"
          />
          </CardItem>
          </CardContainer>
        </div>
        {/* Description */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Doñana National Park Fire Analysis</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Environmental Impact Assessment of the 2017 Wildfire.</span> This project analyzes the devastating fire that occurred in Doñana National Park (Huelva) during 2017. Using satellite imagery analysis and remote sensing techniques, we studied the fire's impact on the park's ecosystem through NDVI calculations and land cover change detection, providing valuable insights into the environmental consequences of this event.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
          <img
            src="/images/maps.jpeg"
            alt="Remote Sensing Project preview"
            height="300"
            width="300"
            className="w-auto h-auto mx-auto object-contain rounded-xl shadow-lg"
          />
          </CardItem>
          </CardContainer>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          <a href="https://github.com/RIKICARRE/Teledeteccion" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repository</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  {
    src: "/images/cripto.png",
    title: "Cryptography Project",
    category: "Cybersecurity",
    content: (
      <div className="flex flex-col gap-8">
        {/* Tags and buttons */}
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Python</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Cryptography</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">RSA</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">AES</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Security</span>
        </div>
        {/* Introduction */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Cryptographic Algorithms Implementation</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">High-speed medical image encryption.</span> This project presents an innovative approach for securing medical images using high-speed shuffling and adaptive pixel diffusion techniques, ensuring robust protection and confidentiality for sensitive healthcare data.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
              <img
                src="/images/cripto.png"
                alt="Cryptography Project preview"
                height="300"
                width="300"
                className="w-auto h-auto mx-auto object-contain rounded-xl shadow-lg"
              />
            </CardItem>
          </CardContainer>
        </div>
        {/* Description */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Secure Communication and Analysis</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Web-based encryption and decryption of medical images.</span> This project, developed for the Cryptography course, consists of a web application that enables secure encryption and decryption of medical images using scrambling and diffusion techniques. It emphasizes practical data protection and highlights the importance of safeguarding sensitive medical information.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
              <img
                src="/images/cifrado.png"
                alt="Cryptanalysis preview"
                height="300"
                width="300"
                className="w-auto h-auto mx-auto object-contain rounded-xl shadow-lg"
              />
            </CardItem>
          </CardContainer>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          <a href="https://github.com/pabolimor99/CriptoG-14" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repository</RainbowButton>
          </a>
          <a href="https://github.com/pabolimor99/CriptoG-14/blob/main/doc/Proyecto_C.pdf" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Paper</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  {
    src: "/images/myw.jpg",
    title: "MapYourWorld",
    category: "Full-Stack Development",
    content: (
      <div className="flex flex-col gap-8">
        {/* Tags and buttons */}
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">React</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Spring Boot</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">PostgreSQL</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Mapbox</span>
          <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs">Gamification</span>
        </div>
        {/* Introduction */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Explore the World, One District at a Time</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">MapYourWorld is a geolocation-based app that encourages real-world exploration through gamification.</span> Users unlock areas, complete challenges, collect points of interest, and interact with a collaborative map to visualize their progress and achievements.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
              <img
                src="/images/logo_myw.png"
                alt="MapYourWorld Project preview"
                height="300"
                width="300"
                className="w-auto h-75 mx-auto object-contain rounded-xl shadow-lg"
              />
            </CardItem>
          </CardContainer>
        </div>
        {/* Description */}
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">Collaborative and Interactive Mapping Experience</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto text-center">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">Developed as part of a university software engineering project,</span> this platform combines Spring Boot, React, and Mapbox to provide a dynamic and scalable mapping experience. It features user authentication, achievement tracking, real-time map updates, and a premium model with exclusive content.
          </p>
          <CardContainer>
            <CardItem translateZ={100}>
              <img
                src="/images/mapa_myw.jpeg"
                alt="MapYourWorld map demo"
                height="300"
                width="300"
                className="w-auto h-100 mx-auto object-contain rounded-xl shadow-lg"
              />
            </CardItem>
          </CardContainer>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          <a href="https://github.com/ISPP-Grupo-7/MapYourWorld" target="_blank" rel="noopener noreferrer">
            <RainbowButton>Repository</RainbowButton>
          </a>
          <a href="https://mapyourworld.netlify.app/" target="_blank" rel="noopener noreferrer">
            <RainbowButton>MapYourWorld Page</RainbowButton>
          </a>
          <a href="https://linktr.ee/mapyourworldapp" target="_blank" rel="noopener noreferrer">
            <RainbowButton>MapYourWorld Social Media</RainbowButton>
          </a>
        </div>
      </div>
    ),
  },
  // Puedes agregar más proyectos siguiendo esta estructura modular y elegante
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
    <section className="relative w-full max-w-2xl mx-auto mb-12 mt-12 p-6 rounded-xl bg-card shadow-lg overflow-hidden">
        <VelocityScroll numRows={1} defaultVelocity={3} className="text-5xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
            Projects
        </VelocityScroll>
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2}/>
      {/* Carrusel de proyectos */}
      <Carousel
        items={proyectos.map((proyecto, idx) => (
          <Card key={proyecto.title} card={proyecto} index={idx}/>
        ))}
      />
    </section>
  </BlurFade>
);

export default Proyectos;