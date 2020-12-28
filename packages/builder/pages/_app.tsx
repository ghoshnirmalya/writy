import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "components/layouts";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (isProduction) {
      const gtag = require("lib/google-tag");

      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };
  const customTheme = extendTheme({
    config,
    colors: {
      brand: {
        100: "#ffffff",
        200: "#bfbfbf",
        300: "#a6a6a6",
        400: "#8c8c8c",
        500: "#737373",
        600: "#595959",
        700: "#404040",
        800: "#262626",
        900: "#151515",
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);
