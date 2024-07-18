
import "../styles/globals.css";
import Layout from "./../src/components/Layout";

import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }) {
  return (
    <div>
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
