import type { AppProps } from "next/app";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { EmotionCache } from "@emotion/utils";
import globalTheme from "src/core/styles/global.theme";
import createEmotionCache from "src/core/lib/createEmotionCache";
import RootLayout from "src/core/components/RootLayout/RootLayout";
import { Inter } from "next/font/google";
import { CssBaseline } from "@mui/material";
import { ProjectsProvider } from "src/features/ProjectsPage/Projects.context";

const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const font = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { ...pageProps },
}: IMyAppProps) {
  return (
    <>
      {" "}
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <CacheProvider value={emotionCache}>
        <MuiThemeProvider theme={globalTheme}>
          <ThemeProvider theme={globalTheme}>
            <CssBaseline />
            <ProjectsProvider>
              <RootLayout>
                <Component {...pageProps} />
              </RootLayout>
            </ProjectsProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </CacheProvider>
    </>
  );
}
