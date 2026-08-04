import { createContext } from "react";
import type { ContextType } from "../types/types";

export const ThemeContext = createContext<ContextType | null>(null)