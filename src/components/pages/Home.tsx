import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";

const Home = () => (
  <BlurFade>
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center px-4 md:px-0">
      <WordRotate
        words={["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "こんにちは", "안녕하세요", "你好", "Привет"]}
        className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in"
      />
      <h2 className="text-xl md:text-3xl font-semibold mb-2 animate-fade-in [animation-delay:100ms]">I'm <AuroraText>Riki</AuroraText>, a Software Engineering Graduate</h2>
      <h3 className="text-base md:text-xl font-normal text-muted-foreground max-w-xl mb-8 animate-fade-in [animation-delay:200ms]">
        Full-stack developer specializing in Java, Spring Boot, and React. Passionate about building secure, user-centric applications and currently advancing in cybersecurity.
      </h3>
    </div>
  </BlurFade>
);

export default Home;