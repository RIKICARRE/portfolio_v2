import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ChevronDown } from "lucide-react";

const Home = () => (
  <BlurFade>
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center px-4 md:px-0">
      <WordRotate
        words={["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "こんにちは", "안녕하세요", "你好", "Привет"]}
        className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in"
      />
      <h2 className="text-xl md:text-3xl font-semibold mb-2 animate-fade-in [animation-delay:100ms]">
        Soy <AuroraText>Ricardo</AuroraText>, graduado en Ingeniería del Software
      </h2>
      <h3 className="text-base md:text-xl font-normal text-muted-foreground max-w-xl mb-8 animate-fade-in [animation-delay:200ms]">
        Full-stack developer con foco en Java, Spring Boot y React. Me apasiona construir aplicaciones seguras,
        centradas en el usuario y con arquitecturas escalables.
      </h3>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground">
        <span className="scroll-indicator-text">Sigue bajando para conocer más</span>
        <div className="flex flex-col items-center">
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <ChevronDown className="-mt-2 h-5 w-5 animate-bounce [animation-delay:150ms]" />
        </div>
      </div>
    </div>
  </BlurFade>
);

export default Home;
