import Head from "next/head";
import "../styles/globals.css";
import { LayoutComponent } from "../componets";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
