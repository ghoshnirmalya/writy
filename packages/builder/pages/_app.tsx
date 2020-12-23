import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layouts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
