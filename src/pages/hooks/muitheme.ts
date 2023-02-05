import { createTheme, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
export const customTheme = (theme: any) =>
    createTheme({
        palette: {
            // update this from the store :

            mode: theme,
            ...(theme === "light"
                ? {
                      primary: {
                          main: grey[900],
                      },

                      secondary: {
                          main: grey[800],
                      },
                      text: {
                          primary: grey[900],
                          secondary: grey[300],
                      },

                      background: {
                          default: "#DBE1E6",
                          paper: "#ffffff",
                      },
                  }
                : {
                      // palette values for dark theme
                      primary: {
                          main: grey[300],
                      },
                      secondary: {
                          main: grey[300],
                      },
                      background: {
                          default: "#020302",
                          paper: "#1B1A1A",
                      },
                      text: {
                          primary: "#D2D4D6",
                          secondary: "#424344",
                      },
                  }),
        },
    });
