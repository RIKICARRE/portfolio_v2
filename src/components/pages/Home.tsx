import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";

const Home = () => (
  <BlurFade>
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
        <WordRotate
          words={["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "こんにちは", "안녕하세요", "你好", "Привет"]}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in"
        />
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 animate-fade-in [animation-delay:100ms]">I'm <AuroraText>Riki</AuroraText>, a Software Engineer Student</h2>
        <h3 className="text-lg md:text-xl font-normal text-muted-foreground max-w-xl mb-8 animate-fade-in [animation-delay:200ms]">My passion is to learn everything about technology and programming. I’m always looking for new challenges and opportunities to grow.</h3>
    </div>
  </BlurFade>
);

export default Home;