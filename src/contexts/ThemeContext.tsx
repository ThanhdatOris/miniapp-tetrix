"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem("tetrix-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("tetrix-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('toggleTheme called, current theme:', theme);
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log('Setting theme to:', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        isDark: theme === "dark" 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}