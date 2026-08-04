import React from "react";
import { ThemeContext } from "./ThemeContext";
import { MantineProvider, type MantineColorScheme } from "@mantine/core";
import { theme } from "../theme/theme";
import { useLocalStorage } from "@mantine/hooks";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<MantineColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme, setColorScheme }}>
        <MantineProvider forceColorScheme={colorScheme} theme={theme}>
            {children}
        </MantineProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
