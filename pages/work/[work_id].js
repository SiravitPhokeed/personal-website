// ReactJS import
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

// Icon import
import { MdImage, MdLaunch } from "react-icons/md";

// Style sheet import
import workStyle from "../../styles/pages/work.module.scss";

// Temporary database import
import { works } from "../../temp-db/works.js";

export async function getServerSideProps(content) {
    const { work_id } = content.query;
    return { props: { work_id } }
}

export default function Work({ work_id }) {
    const [readme, setReadme] = useState({
        fetched: false,
        readme: null
    });
    const [work, setWork] = useState({
        fetched: true,
        work: works.filter(work => work.id === work_id)[0]
    })

    function renderImage() {
        return (
            <div className={workStyle["image"]}>
                <MdImage />{work.work.name}
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
                        Find this {work.type}
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
        if (work.fetched)
            fetch(work.work.readme)
                .then(res => res.text())
                .then(response => setReadme({ fetched: true, readme: response }));
    }

    if (readme.fetched === false)
        fetchReadme();

    return (
        <main className={workStyle["work-grid"]}>
            {renderImage()}
            {renderContent(work.work)}
        </main>
    )
}