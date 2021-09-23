// Modules import
import Head from "next/head";
import Image from "next/image";

// Style sheet import
import homeStyle from "../styles/pages/home.module.scss";

export default function Home() {
    return (
        <main>
            <section className={homeStyle["title-section"]}>
                <header className={homeStyle["header"]}>
                    <h1 className={homeStyle["title"]}>Siravit P.</h1>
                    <p className={homeStyle["subtitle"]}>Front-end web developer and designer working primarily with React</p>
                </header>
            </section>
            <section>
                <button className={homeStyle["continue-button"]}>Test button</button>
            </section>
        </main>
    );
}
