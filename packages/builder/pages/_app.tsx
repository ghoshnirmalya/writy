import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "components/layouts";
import { AppProps } from "next/app";
import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
  };
  const customTheme = extendTheme({ config });

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);
