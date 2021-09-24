// Modules import
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Style sheet import
import homeStyle from "../styles/pages/home.module.scss";

// Photos import
import background_img from "../public/index-background.svg";

// Temporary database import
import { works } from "../temp-db/works.js";

export default function Home() {
    const router = useRouter();

    function renderTitleSect() {
        return (
            <section className={homeStyle["title-section"]}>
                <header className={homeStyle["title-header"]}>
                    <div className={homeStyle["title-text"]}>
                        <h1 className={homeStyle["title"]}>Hi, I'm Siravit P!</h1>
                        <p className={homeStyle["subtitle"]}>Front-end web developer and designer working primarily with React</p>
                    </div>
                    <div className={homeStyle["title-buttons"]}>
                        <button className={homeStyle["continue-button"]} onClick={() => router.push("#contact")}>
                            Get in touch
                        </button>
                        <button className={homeStyle["secondary-button"]} onClick={() => router.push("#work")}>
                            See more
                        </button>
                    </div>
                </header>
                <div className={homeStyle["title-image"]} />
            </section>
        );
    }

    function renderWorkSect(works) {
        function renderWorks(works) {
            return (
                <div className={homeStyle["work-grid"]}>
                    {works.map(work =>
                        <Link href={`/work/${work.id}`}>
                            <a className={homeStyle["work-card"]}>
                                <div className={homeStyle["work-content"]}>
                                    <div>
                                        <h3>{work.name}</h3>
                                        <p>{work.desc}</p>
                                    </div>
                                    <span className={homeStyle["work-type"]}>
                                        {`${work.type[0].toUpperCase()}${work.type.slice(1)}`}
                                    </span>
                                </div>
                            </a>
                        </Link>
                    )}
                </div>
            )
        }

        return (
            <section className={homeStyle["work-section"]} id="work">
                <div className={homeStyle["header"]}>
                    <h2 className={homeStyle["header-header"]}>Stuff I’ve worked on</h2>
                    <p className={homeStyle["header-subtitle"]}>Projects and certificates</p>
                </div>
                <div className={homeStyle["work-grid-container"]}>
                    {renderWorks(works)}
                </div>
                <div className={homeStyle["continue-container"]}>
                    <button className={homeStyle["continue-button"]}>See all</button>
                </div>
            </section>
        );
    }

    function renderLangsSect(langs) {
        return (
            <section className={homeStyle["langs-section"]}>
                <div className={homeStyle["header"]}>
                    <h2 className={homeStyle["header-header"]}>I’m also comfortable with…</h2>
                </div>
                <button className={homeStyle["continue-button"]}>See all</button>
            </section>
        );
    }

    function renderContactSect(contacts) {
        return (
            <section className={homeStyle["contact-section"]} id="contact">
                <div className={homeStyle["header"]}>
                    <h2 className={homeStyle["header-header"]}>Get in touch!</h2>
                </div>
                <div className={homeStyle["work-grid-container"]}>
                    <div className={homeStyle["work-grid"]}>
                        {contacts.map(contact => {
                            return (
                                <Link href={`/work/${contact.id}`}>
                                    <a className={homeStyle["work-card"]}>
                                        <h3>{contact.name}</h3>
                                        <p>{contact.type}</p>
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div>
                    {renderContactMe()}
                </div>
            </section>
        );
    }

    function renderContactMe() {
        return (
            <fieldset className={homeStyle["contact-fieldset"]}>
                <div className={homeStyle["contact-left"]}>
                    <div className={homeStyle["contact-inputset"]}>
                        <input placeholder="John Doe" />
                        <input placeholder="johndoe@example.com" />
                    </div>
                    <input className={homeStyle["contact-title"]} placeholder="I’d like to contact you about this" />
                </div>
                <div className={homeStyle["contact-right"]}>
                    <textarea className={homeStyle["contact-textarea"]}
                        placeholder="Hi, we think we might need X for company Y and we would like to find a time to discuss this with you." />
                    <div className={homeStyle["send-container"]}>
                        <button className={homeStyle["send-button"]}>Send!</button>
                    </div>
                </div>
            </fieldset>
        )
    }

    return (
        <main>
            {renderTitleSect()}
            {renderWorkSect(works)}
            {renderLangsSect([
                { name: "HTML", img: "", id: "0" },
                { name: "Sass", img: "", id: "1" },
                { name: "JavaScript", img: "", id: "2" },
                { name: "React", img: "", id: "3" },
                { name: "NextJS", img: "", id: "4" }
            ])}
            {renderContactSect([
                { type: "LinkedIn", name: "Siravit Phokeed", url: "https://www.linkedin.com/in/siravit-phokeed-2a8904211/", id: "0" }
            ])}
        </main>
    );
}
