import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2",
              light: "#42a5f5",
              dark: "#1565c0",
            },
            secondary: {
              main: "#9c27b0",
              light: "#ba68c8",
              dark: "#1565c0",
            },
            error: {
              main: "#d32f2f",
              light: "#ef5350",
              dark: "#c62828",
            },
            warning: {
              main: "#ed6c02",
              light: "#ff9800",
              dark: "#e65100",
            },
            info: {
              main: "#0288d1",
              light: "#03a9f4",
              dark: "#01579b",
            },
            success: {
              main: "#469264",
              light: "#DAE9E0",
              dark: "#1b5e20",
            },
            text: {
              primary: "rgba(0,0,0,0.87)",
              secondary: "rgba(0,0,0,0.6)",
              disabled: "rgba(0,0,0,0.12)",
              grey: "#777"
            },
            background: {
              paper: "#fff",
              default: "#fff",
              tab: "#F4F5F7",
              common: "#fff",
              table1: "#f4f5f7",
              table2: "#fff",
              button: "#eaeaea"
            },
          }
        : {
            primary: {
              main: "#90caf9",
              light: "#e3f2fd",
              dark: "#42a5f5",
            },
            secondary: {
              main: "#ce93d8",
              light: "#f3e5f5",
              dark: "#ab47bc",
            },
            error: {
              main: "#f44336",
              light: "#e57373",
              dark: "#d32f2f",
            },
            warning: {
              main: "#ffa726",
              light: "#ffb74d",
              dark: "#f57c00",
            },
            info: {
              main: "#29b6f6",
              light: "#4fc3f7",
              dark: "#0288d1",
            },
            success: {
              main: "#469264",
              light: "#3F534C",
              dark: "#388e3c",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255,255,255,0.7)",
              disabled: "rgba(255,255,255,0.5)",
              grey: "#fff"
            },
            background: {
              paper: "#161718",
              default: "#161718",
              tab: "#000",
              common: "#000",
              table1: "#222327",
              table2: "#161718",
              button: "#2f3138"
            },
          }),
    },
    typography: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 14,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
