/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

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
  const CYCLE_DURATION = 2000; // 2 seconds per logo

  // Define logos using public SVGs
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "CSS", src: "src/assets/CssSVGVectors.svg" },
      { id: 2, name: "Django", src: "src/assets/DjangoSVGIcons.svg" },
      { id: 3, name: "Docker", src: "src/assets/DockerSVGIcons.svg" },
      { id: 4, name: "Flask", src: "src/assets/FlaskLogo.svg" },
      { id: 5, name: "Github", src: "src/assets/GithubSVGIcon.svg" },
      { id: 6, name: "HTML", src: "src/assets/HtmlSVGVectors.svg" },
      { id: 7, name: "SQL", src: "src/assets/IconoSVGBasedeDatosSQL.svg" },
      { id: 8, name: "Java", src: "src/assets/JavaSVGVectors.svg" },
      { id: 9, name: "Javascript", src: "src/assets/JavascriptSVGVectors.svg" },
      { id: 10, name: "Matlab", src: "src/assets/MatlabSVGIcon.svg" },
      { id: 11, name: "Mysql", src: "src/assets/MysqlSVGIcon.svg" },
      { id: 12, name: "Python", src: "src/assets/PythonSVGVectors.svg" },
      { id: 13, name: "Selenium", src: "src/assets/SeleniumSVGIcon.svg" },
      { id: 14, name: "Sonarqube", src: "src/assets/SonarqubeSVGIcon.svg" },
      { id: 15, name: "Tailwind", src: "src/assets/TailwindSVGIcons.svg" },
      { id: 16, name: "Typescript", src: "src/assets/TypescriptSVGIcon.svg" },
      { id: 17, name: "React", src: "src/assets/react.svg" },
    ],
    []
  );

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
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
    [columns]
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

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
