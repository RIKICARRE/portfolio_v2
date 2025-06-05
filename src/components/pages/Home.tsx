import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ArrowDown } from "lucide-react";

const Home = () => (
  <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
    <section className="snap-start h-screen flex flex-col items-center justify-center text-center relative p-4">
      <WordRotate
        words={["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "こんにちは", "안녕하세요", "你好", "Привет"]}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in"
      />
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 animate-fade-in [animation-delay:100ms]">I'm <AuroraText>Riki</AuroraText>, a Software Engineer Student</h2>
      <h3 className="text-lg md:text-xl font-normal text-muted-foreground max-w-xl mb-8 animate-fade-in [animation-delay:200ms]">My passion is to learn everything about technology and programming. I’m always looking for new challenges and opportunities to grow.</h3>
      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-1">Keep scrolling for more information</p>
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
    <section className="snap-start h-screen flex flex-col items-center justify-center p-4">
      <BlurFade className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">yeah, i'm riki</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-4">I'm a curious software engineering student who loves creating useful and elegant solutions. Always eager to explore new technologies and share knowledge.</p>
        <img src="/images/me.jpg" alt="Riki" className="w-40 h-40 rounded-full object-cover" />
      </BlurFade>
    </section>
    <section className="snap-start h-screen flex flex-col items-center justify-center p-4">
      <BlurFade className="text-center max-w-xl">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Why Software Engineering?</h3>
        <p className="text-base md:text-lg text-muted-foreground">Technology has always fascinated me, and studying Software Engineering allows me to turn ideas into reality while continuously learning and solving problems.</p>
      </BlurFade>
    </section>
    <section className="snap-start h-screen flex flex-col items-center justify-center p-4">
      <BlurFade className="text-center max-w-xl">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Hobbies</h3>
        <p className="text-base md:text-lg text-muted-foreground">I enjoy playing padel, video games, keeping up with tech news and mixing music as a DJ.</p>
      </BlurFade>
    </section>
    <section className="snap-start h-screen flex flex-col items-center justify-center p-4">
      <BlurFade>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-primary underline">
          Want to know a secret about me?
        </a>
      </BlurFade>
    </section>
  </div>
);

export default Home;