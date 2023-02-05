import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/system";
import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useCustomMUITheme() {
    // const [theme, setTheme] = useLocalStorage("reddit-theme", "dark");
    const theme = "dark"

    const themeMode = {
        toggleThemeMode: () => {
            // theme === "dark" ? setTheme("light") : setTheme("dark");
        },
        // isDarkMode: theme === "light" ? false : true,
    };

    const customTheme = createTheme({
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

    return { themeMode,customTheme };
}
