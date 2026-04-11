import { createTheme, alpha } from "@mui/material/styles";

const shape = { borderRadius: 14 };

const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 800, lineHeight: 1.15 },
  h2: { fontWeight: 700, lineHeight: 1.2 },
  h3: { fontWeight: 700 },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600 },
  button: { textTransform: "none", fontWeight: 600 },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 50, padding: "10px 28px" },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { fontWeight: 500 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 16 },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: { "& .MuiOutlinedInput-root": { borderRadius: 12 } },
    },
  },
};

export const lightTheme = createTheme({
  shape,
  typography,
  components,
  palette: {
    mode: "light",
    primary: { main: "#4f46e5", light: "#818cf8", dark: "#3730a3" },
    secondary: { main: "#9333ea" },
    background: { default: "#faf9f7", paper: "#ffffff" },
    text: { primary: "#1c1917", secondary: "#57534e" },
    divider: "#e7e5e4",
  },
});

export const darkTheme = createTheme({
  shape,
  typography,
  components: {
    ...components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: { main: "#818cf8", light: "#a5b4fc", dark: "#4f46e5" },
    secondary: { main: "#c084fc" },
    background: { default: "#080810", paper: "#0f1020" },
    text: { primary: "#f1f0fe", secondary: "#94a3b8" },
    divider: "rgba(255,255,255,0.08)",
  },
});

export { alpha };
