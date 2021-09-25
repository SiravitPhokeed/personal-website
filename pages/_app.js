// ReactJs import
import Head from "next/head";

// Global style sheet import
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
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
