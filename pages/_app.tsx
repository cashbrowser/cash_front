import type { AppProps } from "next/app";
import "normalize.css";
import "rc-dropdown/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ThemeContext } from "../context/theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    isIncognito: false,
  };
  const themeName = config.isIncognito ? "dark" : "light";
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={themeName}>
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}
