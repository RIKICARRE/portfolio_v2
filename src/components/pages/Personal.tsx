import { BlurFade } from "@/components/magicui/blur-fade";
import { ShineBorder } from "@/components/magicui/shine-border";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { BoxReveal } from "@/components/magicui/box-reveal";
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

const Personal = () => (
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
          <BreadcrumbPage>About Me</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <section className="relative w-full max-w-full md:max-w-2xl mx-auto mb-12 mt-12 p-3 md:p-6 rounded-xl bg-card shadow-lg overflow-visible">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={2} />
      <VelocityScroll numRows={1} defaultVelocity={3} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-12 animate-fade-in">
        About Me
      </VelocityScroll>
      <div className="space-y-6 text-base text-left text-muted-foreground">
        <BoxReveal>
          <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🎸 Music & Arts</h5>
            <p>I enjoy playing the guitar and exploring new music genres. I also like visiting art exhibitions and local concerts.</p>
          </div>
        </BoxReveal>
        <BoxReveal>
          <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🏃‍♂️ Outdoor Activities</h5>
            <p>Hiking and running are my favorite ways to stay active and disconnect from the screen.</p>
          </div>
        </BoxReveal>
        <BoxReveal>
          <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">🎮 Gaming</h5>
            <p>I love relaxing with video games, from strategy titles to classic adventures.</p>
          </div>
        </BoxReveal>
        <BoxReveal>
          <div>
            <h5 className="font-semibold text-primary mb-1 flex items-center gap-2">📚 Reading & Learning</h5>
            <p>Beyond coding, I'm passionate about personal development books and learning new skills.</p>
          </div>
        </BoxReveal>
      </div>
    </section>
  </BlurFade>
);

export default Personal;
