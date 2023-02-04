import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layouts/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { grey } from "@mui/material/colors";
import { RecoilRoot } from "recoil";
declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const themeMode = useMemo(
        () => ({
            toggleThemeMode: () => {
                console.log("entered theme");
                setTheme((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
            isDarkMode: theme === "light" ? false : true,
        }),
        [theme]
    );

    const customTheme = useMemo(
        () =>
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
            }),
        [theme]
    );

    return (
        <RecoilRoot >
            <ThemeModeContext.Provider value={themeMode}>
                <ThemeProvider theme={customTheme}>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </ThemeModeContext.Provider>
        </RecoilRoot>
    );
}
