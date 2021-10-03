// ReactJS import
import Image from "next/image";
import firebase from "../../firebase/client-app.js";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

// Icon import
import { MdImage, MdLaunch } from "react-icons/md";

// Photos import
import certificateImage from "../../public/work-certificate.png";
import projectImage from "../../public/work-project.png";

// Style sheet import
import workStyle from "../../styles/pages/work.module.scss";

// Temporary database import
import { works } from "../../temp-db/works.js";

export async function getServerSideProps(content) {
    const { work_name } = content.query;
    return { props: { work_name } }
}

export default function Work({ work_name }) {
    const [readme, setReadme] = useState({
        fetched: false,
        readme: null
    });
    const [work, workLoading, workError] = useCollection(
        firebase.firestore().collection("portfolio").where("name", "==", work_name),
        {}
    );

    function renderImage(type) {
        return (
            <div className={workStyle["image"]}>
                {type === "certificate"
                ? <Image src={certificateImage} alt="Certificate clipart" />
                : <Image src={projectImage} alt="Project clipart" />}
            </div>
        )
    }

    function renderContent(work) {
        return (
            <div className={workStyle["content"]}>
                <section className={workStyle["section"]}>
                    <h1>
                        {work.name}
                    </h1>
                    <p>
                        {work.fullDesc}
                    </p>
                </section>
                {work.type === "project" ? <section className={workStyle["section"]}>
                    <h2>Languages this project uses</h2>
                    <ul className={workStyle["lang-container"]}>
                        {work.uses.map((lang, index) =>
                            <li key={index} className={workStyle[`lang-main-${lang.main}`]}>
                                {lang.name}
                            </li>
                        )}
                    </ul>
                </section> : null}
                <section className={workStyle["section"]}>
                    <h2>
                        Find this {work.types[0]}
                    </h2>
                    <div className={workStyle["link-container"]}>
                        {work.links.map(link =>
                            <a key={link.url} href={link.url} className={workStyle["link"]} target="_blank" rel="noreferrer">
                                {link.name}<MdLaunch />
                            </a>
                        )}
                    </div>
                </section>
                {work.type === "project" ? <section className={workStyle["section"]}>
                    <h2>GitHub Readme</h2>
                    <ReactMarkdown className={`markdown ${workStyle["readme-markdown"]}`}>{readme.readme}</ReactMarkdown>
                </section> : null}
            </div>
        )
    }

    function fetchReadme() {
        if (readme.fetched)
            fetch(work.readme)
                .then(res => res.text())
                .then(response => setReadme({ fetched: true, readme: response }));
    }

    if (readme.fetched === false)
        fetchReadme();

    if (workLoading) {
        console.log("Loading!")
        return <main className={workStyle["work-grid"]} />;
    // } else if (readme.fetched === false) {
    //     console.log("Fetching readme!")
    //     // fetchReadme();
    //     return <main className={workStyle["work-grid"]} />;
    } else {
        console.log(work.docs[0].data());
        return (
            <main className={workStyle["work-grid"]}>
                {renderImage(work.docs[0].data().type)}
                {renderContent(work.docs[0].data())}
            </main>
        )
    }
}