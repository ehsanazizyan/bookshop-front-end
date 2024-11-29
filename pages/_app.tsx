import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Head>
                    <title>book shop</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* <link rel="icon" href="/favicon.png" /> */}
                </Head>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
