// Global style sheet import
import "../styles/base/reset.scss";
import "../styles/base/typography.scss";
import "../styles/layout/menu.scss";

// Components import
import Layout from "../components/layout.js";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
