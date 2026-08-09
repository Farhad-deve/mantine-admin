import { useLocalStorage } from "@mantine/hooks";
import React, { useMemo } from "react";
import { theme } from "../theme/theme";
import { MantineProvider } from "@mantine/core";
import { ThemeContext } from "../context/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [primaryColor, setPrimaryColor] = useLocalStorage<string>({
    key: "admin-primary-color",
    defaultValue: "blue",
  });

  const currentTheme = useMemo(
    () => ({
      ...theme,
      primaryColor,
    }),
    [primaryColor],
  );

  return (
    <>
      <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
        <MantineProvider theme={currentTheme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
