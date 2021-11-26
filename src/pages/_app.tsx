import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>adam's studio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
