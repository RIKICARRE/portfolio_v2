import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { HomeIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Tecnologias = () => (
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
    <section className="relative w-full max-w-2xl mx-auto mb-12 mt-12 p-6 rounded-xl bg-card shadow-lg overflow-hidden">
        <VelocityScroll numRows={1} defaultVelocity={3} className="text-5xl md:text-5xl font-extrabold tracking-tight mb-12 animate-fade-in">
            Technologies
        </VelocityScroll>
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2}/>
      <LogoCarousel columns={3} />
    </section>
    {/* Sección detallada de tecnologías y herramientas */}
    <section className="relative w-full max-w-2xl mx-auto mb-12 p-6 rounded-xl bg-card shadow-lg overflow-hidden">
      <h4 className="text-xl font-bold mb-4">Knowledge and Tools</h4>
      <div className="space-y-6 text-base justify-center">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2}/>
      <BoxReveal>
        {/* Lenguajes de Programación */}
        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🖥️ Programming Languages</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Java:</b> Application development and entity management in academic projects.</li>
                <li><b>Python:</b> Scripting, automation, data analysis, MATLAB-like calculations, and machine learning.</li>
                <li><b>MATLAB:</b> Satellite image analysis, remote sensing, NDVI, histograms.</li>
                <li><b>JavaScript / TypeScript:</b> Frontend development with React and browser logic.</li>
                <li><b>HTML / CSS:</b> Static web development and integration with modern frameworks.</li>
                <li><b>SQL:</b> Queries, relational databases, SQL injection analysis.</li>
                <li><b>Bash / Shell Scripting:</b> Task automation in Linux environments (ARM64).</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>
        
        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🌐 Frameworks and Libraries</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Django:</b> Backend web application development.</li>
                <li><b>Flask:</b> Lightweight projects and API development.</li>
                <li><b>React (with Tailwind CSS):</b> Modern frontend development and personal portfolios.</li>
                <li><b>pytest:</b> Automated testing in Python.</li>
                <li><b>Selenium:</b> Web interface testing automation.</li>
                <li><b>Framer Motion:</b> Animations in React interfaces.</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>
        
        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">📦 Containers and DevOps</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Docker / Docker Compose:</b> Development environments and deployment management.</li>
                <li><b>GitHub Actions:</b> CI/CD pipeline automation.</li>
                <li><b>SonarQube:</b> Static code analysis.</li>
                <li><b>DefectDojo:</b> Security vulnerability management.</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>

        

        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🔐 Cybersecurity and Cryptography</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>SSL/TLS:</b> Secure communication implementation.</li>
                <li><b>RSA, Hashing (SHA, MD5):</b> Cryptographic algorithms and security studies.</li>
                <li><b>Challenge-Response Authentication:</b> Secure authentication mechanisms.</li>
                <li><b>JWT:</b> Authentication token management.</li>
                <li><b>Defense Against Attacks:</b> SQL injection prevention, replay attack mitigation, API security.</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>

        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">📡 Remote Sensing and Image Analysis</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Satellites:</b> Sentinel-2, DEIMOS-2, Landsat, WorldView-4, and others.</li>
                <li><b>Indexes:</b> NDVI, SWIR, Tasseled Cap Transformation.</li>
                <li><b>Atmospheric Correction:</b> DOS (Dark Object Subtraction) method.</li>
                <li><b>Tools:</b> MATLAB for analysis and remote image calculations.</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>

        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">📚 Databases</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Relational Databases:</b> MySQL, PostgreSQL.</li>
                <li><b>ORM Usage:</b> Entity relationship management (Project, UserStory, MadeOf, etc.).</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>

        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">📱 Marketing and Social Tools</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Meta Business Suite:</b> Social media management.</li>
                <li><b>SEO Analysis:</b> Search engine optimization, keyword strategies, marketing campaigns.</li>
                <li><b>Canva / Figma:</b> Visual design in marketing projects.</li>
            </ul>
        </div>
        </BoxReveal>
        <BoxReveal>
        <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🛠️ Other Tools and Platforms</h5>
            <ul className="list-disc list-inside text-muted-foreground pl-4">
                <li><b>Git / GitHub:</b> Version control, key management, and commit handling.</li>
                <li><b>Warp:</b> Advanced terminal for automation.</li>
                <li><b>Trae IDE:</b> Use of AI agents and MCP.</li>
                <li><b>Azure:</b> Domain configuration and virtual machines.</li>
                <li><b>PDF Tools:</b> Digital signature detection in PDF documents.</li>
                <li><b>MATLAB Toolboxes:</b> Image processing and data analysis.</li>
            </ul>
        </div>
      </BoxReveal>
      </div>
    </section>
  </BlurFade>
);

export default Tecnologias;