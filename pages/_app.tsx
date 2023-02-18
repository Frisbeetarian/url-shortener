import Head from "next/head";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
