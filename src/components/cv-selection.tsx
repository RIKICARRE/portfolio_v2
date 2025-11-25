"use client";

import { FileText } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function CVSelection() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div aria-label="CV Options" className="cursor-pointer w-full h-full flex items-center justify-center">
                    <FileText className="w-7 h-7" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-2 mb-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <div className="grid gap-2">
                    <a
                        href="https://rxresu.me/rikicarre/cv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <span>English</span>
                        <span className="text-xs text-muted-foreground">EN</span>
                    </a>
                    <div className="h-px bg-gray-100 dark:bg-gray-800" />
                    <a
                        href="https://rxresu.me/rikicarre/cv-spanish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                    >
                        <span>Español</span>
                        <span className="text-xs text-muted-foreground">ES</span>
                    </a>
                </div>
            </PopoverContent>
        </Popover>
    );
}
