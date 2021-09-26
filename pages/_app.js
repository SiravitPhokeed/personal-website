// ReactJs import
import Head from "next/head";

// Global style sheet import
import "../styles/base/global.scss";
import "../styles/base/reset.scss";
import "../styles/base/typography.scss";
import "../styles/components/grid.scss";
import "../styles/layout/menu.scss";
import "../styles/utils/markdown.scss";

// Components import
import Layout from "../components/layout.js";

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Siravit P</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="theme-color" content="#FFFFFF" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
