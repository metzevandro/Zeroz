import React from "react";
import { useIsDarkMode } from "../hooks/useDarkMode";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useIsDarkMode();

  React.useEffect(() => {
    const themeValue = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", themeValue);
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);

    document.body.setAttribute("data-theme", themeValue);
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
}
