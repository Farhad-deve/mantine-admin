import { useLocalStorage } from "@mantine/hooks";
import React, { useMemo } from "react";
import { theme } from "../theme/theme";
import { MantineProvider, type MantineRadius } from "@mantine/core";
import { ThemeContext } from "../context/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [primaryColor, setPrimaryColor] = useLocalStorage<string>({
    key: "admin-primary-color",
    defaultValue: "blue",
  });

  const [defaultRadius, setDefaultRadius] = useLocalStorage<MantineRadius>({
    key: "admin-default-radius",
    defaultValue: "sm",
  });

  const currentTheme = useMemo(
    () => ({
      ...theme,
      primaryColor,
      defaultRadius,
    }),
    [primaryColor, defaultRadius]
  );

  return (
    <>
      <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, defaultRadius, setDefaultRadius }}>
        <MantineProvider theme={currentTheme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
