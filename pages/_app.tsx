import Head from "next/head";
import React from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <ChakraProvider resetCSS>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
