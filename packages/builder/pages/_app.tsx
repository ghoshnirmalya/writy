import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layouts";
import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);
