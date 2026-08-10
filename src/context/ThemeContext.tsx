import { createContext } from "react";
import type { MantineRadius } from "@mantine/core";

interface ThemeContextType {
    primaryColor: string;
    setPrimaryColor: (color: string) => void;

    defaultRadius: MantineRadius;
    setDefaultRadius: (radius: MantineRadius) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
    
