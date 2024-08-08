
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./../src/components/Layout";
import Head from 'next/head';

import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          SInsurance | Cyber Insurance, Life, Car, Travel, Home, Health
          Insurance
        </title>
      </Head>
      <Layout>
        <NextTopLoader
          color="#ec111a"
          showSpinner={false}
        />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
