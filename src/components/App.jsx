import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../theme/muiTheme";
import Portfolio from "./portfolio/Portfolio";

function App() {
  const { mode } = useTheme();
  return (
    <MuiThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Portfolio />
    </MuiThemeProvider>
  );
}

export default App;
