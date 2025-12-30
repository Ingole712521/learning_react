import { useState } from "react"
import { ThemeContext } from "./createContext";



export type Theme = "light" | "dark";


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>("light")

    const themeToggle = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, themeToggle }}>
            {children}
        </ThemeContext.Provider>
    )

}