import { createContext } from "react";

interface ThemeContextType {
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
    
