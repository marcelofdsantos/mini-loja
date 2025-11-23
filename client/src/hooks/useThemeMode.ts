import { useState, useEffect } from "react";

export type ThemeMode = "light" | "dark";

export function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Recuperar tema do localStorage ou usar preferência do sistema
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme, isLoaded };
}
