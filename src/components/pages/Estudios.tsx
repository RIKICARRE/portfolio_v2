import { ShineBorder } from "@/components/magicui/shine-border";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
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

const estudios = [
  {
    date: "2021-09-01",
    title: "Bachelor’s Degree in Software Engineering",
    description: "University education focused on software development, agile methodologies, and engineering best practices.",
    institution: "University of Seville"
  },
  {
    date: "2020-06-01",
    title: "English Level B2",
    description: "Acquired English language skills with a focus on comprehension and effective communication, preparing for both professional and personal environments.",
    institution: "Cambridge English"
  },
  {
    date: "2019-09-01",
    title: "High School Education",
    description: "Completed high school, expanding my knowledge in specific academic areas and preparing for university studies, with a focus on developing critical thinking and analytical skills.",
    institution: "Marist School Nuestra Señora del Carmen"
  },
  {
    date: "2015-09-01",
    title: "Secondary Education",
    description: "Completed secondary education, acquiring a strong foundation in science, humanities, and essential cross-disciplinary competencies for academic and personal development.",
    institution: "Marist School Nuestra Señora del Carmen"
  }
];

const timelineItems = estudios.map(estudio => ({
  date: estudio.date,
  title: estudio.title,
  description: `${estudio.institution}. ${estudio.description}`
}));

const Estudios = () => (
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
            <BreadcrumbPage>Studies</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </BlurFade>
    <section className="relative w-full max-w-full md:max-w-2xl mx-auto mb-12 mt-12 p-3 md:p-6 rounded-xl bg-card shadow-lg">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} />
      <VelocityScroll numRows={1} defaultVelocity={3} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-12 animate-fade-in">
        Studies
      </VelocityScroll>
      <Timeline
        items={timelineItems}
        initialCount={2}
        dotClassName="bg-muted-foreground/20 group-hover:bg-muted-foreground/40 h-2 w-2 transition-colors duration-300"
        lineClassName="border-l border-border/50"
        titleClassName="font-normal"
        dateClassName="font-light"
        buttonVariant="ghost"
        buttonSize="sm"
        showMoreText="Show more"
        showLessText="Show less"
        animationDuration={0.3}
        animationDelay={0.1}
      />
    </section>
  </>
);

export default Estudios;
