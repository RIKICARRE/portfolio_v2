import { useTranslation } from 'react-i18next';
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

export const LanguageSwitcher = ({ className }: Props) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full bg-background/50 text-foreground transition-colors hover:bg-muted font-bold text-sm",
                className
            )}
            aria-label="Toggle Language"
        >
            {i18n.language === 'en' ? 'EN' : 'ES'}
        </button>
    );
};
