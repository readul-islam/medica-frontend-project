import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";
import { createContext, useMemo, useState } from "react";
import { DarkPalette, LightPalette } from "./palette";

export    const ColorModeContext = createContext({ toggleColorMode: () => {} });
export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode,
        ...(mode === light ? { ...LightPalette } : { ...DarkPalette }),
      },
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline>
          <ColorModeContext.Provider value={colorMode}>
            {children}
          </ColorModeContext.Provider>
        </CssBaseline>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
