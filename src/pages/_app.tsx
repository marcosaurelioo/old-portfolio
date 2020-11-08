import Head from "next/head";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps } : any) {
  return (
    <>
      <Head>
        <title>Marcos Aurélio | Web Developer</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
