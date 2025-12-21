import { BlurFade } from "@/components/magicui/blur-fade";
import { HomeIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/ui/logo-carousel"; // Keep this if you want the carousel at top
import { ShineBorder } from "@/components/magicui/shine-border";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: "/svg/react.svg", description: "UI Library" },
      { name: "Vite", icon: "/svg/vite.svg", description: "Build Tool" },
      { name: "TypeScript", icon: "/svg/TypescriptSVGIcon.svg", description: "Typed JavaScript" },
      { name: "JavaScript", icon: "/svg/JavascriptSVGVectors.svg", description: "Web Interaction" },
      { name: "Tailwind CSS", icon: "/svg/TailwindSVGIcons.svg", description: "Utility-first CSS" },
      { name: "HTML5", icon: "/svg/HtmlSVGVectors.svg", description: "Structure" },
      { name: "CSS3", icon: "/svg/CssSVGVectors.svg", description: "Styling" },
      { name: "Framer Motion", icon: "/svg/framer-motion-seeklogo.svg", description: "Animations" },
    ]
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Python", icon: "/svg/PythonSVGVectors.svg", description: "General Purpose" },
      { name: "Django", icon: "/svg/DjangoSVGIcons.svg", description: "Web Framework" },
      { name: "Flask", icon: "/svg/FlaskLogo.svg", description: "Microframework" },
      { name: "Java", icon: "/svg/JavaSVGVectors.svg", description: "Enterprise Applications" },
      { name: "SQL", icon: "/svg/IconoSVGBasedeDatosSQL.svg", description: "Database Querying" },
      { name: "MySQL", icon: "/svg/mysql-svgrepo-com.svg", description: "RDBMS" },
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "/svg/DockerSVGIcons.svg", description: "Containerization" },
      { name: "GitHub", icon: "/svg/github-142-svgrepo-com.svg", description: "Version Control" },
      { name: "Azure", icon: "/svg/AzureSVGIcons.svg", description: "Cloud Services" },
      { name: "Bash", icon: "/svg/bash02-svgrepo-com.svg", description: "Shell Scripting" },
    ]
  },
  {
    category: "Testing & QoS",
    items: [
      { name: "Selenium", icon: "/svg/selenium-svgrepo-com.svg", description: "E2E Testing" },
      { name: "SonarQube", icon: "/svg/sonarqube-svgrepo-com.svg", description: "Code Quality" },
      { name: "pytest", icon: "/svg/Pytest.svg", description: "Python Testing" },
    ]
  },
  {
    category: "Data Science & Security",
    items: [
      { name: "MATLAB", icon: "/svg/MatlabSVGIcon.svg", description: "Numerical Computing" },
      { name: "Cryptography", icon: "/svg/hashing-svgrepo-com.svg", description: "RSA, AES, Hashing" },
      { name: "Web Security", icon: "/svg/browser-security-svgrepo-com.svg", description: "OWASP, SSL/TLS" },
    ]
  }
];

const Tecnologias = () => (
  <>
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
            <BreadcrumbPage>Technologies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </BlurFade>

    <section className="relative w-full max-w-full md:max-w-2xl mx-auto mb-12 mt-12 p-6 rounded-xl bg-card shadow-lg overflow-hidden">
      <VelocityScroll numRows={1} defaultVelocity={3} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-12 animate-fade-in">
        Stack & Tools
      </VelocityScroll>
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} />
      <LogoCarousel columns={3} />
    </section>

    {technologies.map((techCategory, index) => (
      <section key={index} className="relative w-full max-w-full md:max-w-2xl mx-auto mb-12 p-6 rounded-xl bg-card shadow-lg border border-border/50">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={1} />
        <h4 className="text-2xl font-bold mb-6 text-foreground">{techCategory.category}</h4>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techCategory.items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-xl border border-border/40 hover:bg-accent/30 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-full w-full object-contain filter group-hover:brightness-110"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-muted/30 rounded-full text-muted-foreground font-bold text-xs">
                    {item.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <span className="font-semibold text-sm text-foreground text-center">{item.name}</span>
              {item.description && (
                <span className="text-[10px] text-muted-foreground text-center mt-1 hidden sm:block">
                  {item.description}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    ))}
  </>
);

export default Tecnologias;
