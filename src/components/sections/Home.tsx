import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ChevronDown } from "lucide-react";
import { useTranslation, Trans } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <BlurFade className="flex flex-1 h-full w-full">
      <div className="flex flex-col items-center justify-between w-full h-full text-center px-4 md:px-0">

        {/* Top Spacer */}
        <div className="flex-1" />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          <WordRotate
            words={["Hola", "Hello", "Bonjour", "Ciao", "Hallo", "Olá", "こんにちは", "안녕하세요", "你好", "Привет"]}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in"
          />
          <h2 className="text-xl md:text-3xl font-semibold mb-4 animate-fade-in [animation-delay:100ms] leading-tight">
            <Trans i18nKey="home.greeting">
              Soy <AuroraText>Ricardo</AuroraText>, graduado en Ingeniería del Software
            </Trans>
          </h2>
          <h3 className="text-base md:text-xl font-normal text-muted-foreground max-w-xl animate-fade-in [animation-delay:200ms]">
            {t('home.description')}
          </h3>
        </div>

        {/* Bottom Spacer & Scroll Indicator */}
        <div className="flex-1 flex flex-col justify-end pb-10 pl-0 mt-12">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <span className="scroll-indicator-text">{t('home.scroll')}</span>
            <div className="flex flex-col items-center">
              <ChevronDown className="h-5 w-5 animate-bounce" />
              <ChevronDown className="-mt-2 h-5 w-5 animate-bounce [animation-delay:150ms]" />
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default Home;
