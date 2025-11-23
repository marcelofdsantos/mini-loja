export const lightTheme = {
  colors: {
    background: "#ffffff",
    foreground: "#1a1a1a",
    card: "#f9f9f9",
    cardForeground: "#1a1a1a",
    border: "#e5e5e5",
    accent: "#3b82f6",
    accentForeground: "#ffffff",
    muted: "#6b7280",
    mutedForeground: "#ffffff",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    fast: "150ms ease-in-out",
    base: "200ms ease-in-out",
    slow: "250ms ease-in-out",
  },
};

export const darkTheme = {
  colors: {
    background: "#0f0f0f",
    foreground: "#f5f5f5",
    card: "#1a1a1a",
    cardForeground: "#f5f5f5",
    border: "#333333",
    accent: "#3b82f6",
    accentForeground: "#ffffff",
    muted: "#9ca3af",
    mutedForeground: "#0f0f0f",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.6)",
  },
  transitions: {
    fast: "150ms ease-in-out",
    base: "200ms ease-in-out",
    slow: "250ms ease-in-out",
  },
};

export type Theme = typeof lightTheme;
