import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layouts/Layout";
import {  ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { RecoilRoot } from "recoil";
import { customTheme } from "./hooks/muitheme";
import useLocalStorage from "./hooks/useLocalStorage";
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
    
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const themeMode = useMemo(
        () => ({
            toggleThemeMode: () => {
                
                theme==="dark"? setTheme("light"):setTheme("dark")
            },
            isDarkMode: theme === "light" ? false : true,
        }),
        [theme, setTheme]
    );

   
    return (
        <RecoilRoot >
            <ThemeModeContext.Provider value={themeMode}>
                <ThemeProvider theme={customTheme(theme)}>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </ThemeModeContext.Provider>
        </RecoilRoot>
    );
}
