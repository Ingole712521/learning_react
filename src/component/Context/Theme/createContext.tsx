import { createContext,  } from "react";
import type { Theme } from "./provideContext";



interface ThemeContentType {
    theme: Theme,
    themeToggle: () => void
}

export const ThemeContext = createContext<ThemeContentType | null>(null);


