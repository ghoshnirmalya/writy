import { Box } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  googleAnalyticsScriptNode = () => {
    const isProduction = process.env.NODE_ENV === "production";

    if (!isProduction) {
      return false;
    }

    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </>
    );
  };

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.googleAnalyticsScriptNode()}
          <meta name="Description" content="Website builder" />
        </Head>
        <Box as="body">
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}
