/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Define types
interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

// Main component
export function LogoCarousel({ columns = 2 }: { columns?: number }) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const [actualColumns, setActualColumns] = useState(columns);

  // Adjust columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setActualColumns(isMobile ? 2 : columns);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  // Define logos using public SVGs
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "CSS", src: "/svg/CssSVGVectors.svg" },
      { id: 2, name: "Django", src: "/svg/DjangoSVGIcons.svg" },
      { id: 3, name: "Docker", src: "/svg/DockerSVGIcons.svg" },
      { id: 4, name: "Flask", src: "/svg/FlaskLogo.svg" },
      { id: 5, name: "Github", src: "/svg/GithubSVGIcon.svg" },
      { id: 6, name: "HTML", src: "/svg/HtmlSVGVectors.svg" },
      { id: 7, name: "SQL", src: "/svg/IconoSVGBasedeDatosSQL.svg" },
      { id: 8, name: "Java", src: "/svg/JavaSVGVectors.svg" },
      { id: 9, name: "Javascript", src: "/svg/JavascriptSVGVectors.svg" },
      { id: 10, name: "Matlab", src: "/svg/MatlabSVGIcon.svg" },
      { id: 11, name: "Mysql", src: "/svg/MysqlSVGIcon.svg" },
      { id: 12, name: "Python", src: "/svg/PythonSVGVectors.svg" },
      { id: 13, name: "Selenium", src: "/svg/SeleniumSVGIcon.svg" },
      { id: 14, name: "Sonarqube", src: "/svg/SonarqubeSVGIcon.svg" },
      { id: 15, name: "Tailwind", src: "/svg/TailwindSVGIcons.svg" },
      { id: 16, name: "Typescript", src: "/svg/TypescriptSVGIcon.svg" },
      { id: 17, name: "React", src: "/svg/react.svg" },
    ],
    []
  );

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[], cols: number) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: cols }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % cols].push(logo);
      });

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    []
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos, actualColumns));
  }, [logos, distributeLogos, actualColumns]);

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={currentLogo.src}
            alt={currentLogo.name}
            width={120}
            height={40}
            className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
            loading="lazy"
            draggable="false"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
