"use client";

import { Menu, Home, User, Cpu, FolderKanban, Mail } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';

export function SectionsMenu() {
    const { t } = useTranslation();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div aria-label="Menu" className="cursor-pointer w-full h-full flex items-center justify-center">
                    <Menu className="w-7 h-7" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 mb-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <div className="grid gap-1">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')}
                        className={cn(
                            "flex items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <Home className="w-4 h-4" />
                        <span>{t('dock.home')}</span>
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => scrollToSection(e, 'about')}
                        className={cn(
                            "flex items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <User className="w-4 h-4" />
                        <span>{t('dock.about')}</span>
                    </a>
                    <a
                        href="#technologies"
                        onClick={(e) => scrollToSection(e, 'technologies')}
                        className={cn(
                            "flex items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <Cpu className="w-4 h-4" />
                        <span>{t('dock.technologies')}</span>
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => scrollToSection(e, 'projects')}
                        className={cn(
                            "flex items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <FolderKanban className="w-4 h-4" />
                        <span>{t('dock.projects')}</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className={cn(
                            "flex items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <Mail className="w-4 h-4" />
                        <span>{t('dock.contact')}</span>
                    </a>
                </div>
            </PopoverContent>
        </Popover>
    );
}
