// Modules import
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Components import
import { Laptop } from "../components/laptop";

// Style sheet import
import homeStyle from "../styles/pages/home.module.scss";

// Photos import
import holdingImage from "../public/index-holding.png";
import langNextImage from "../public/index-lang-next.svg";
import langReactImage from "../public/index-lang-react.svg";
import langSassImage from "../public/index-lang-sass.svg";
import langCppImage from "../public/index-lang-cpp.svg";

// Temporary database import
import { works } from "../temp-db/works.js";
import { contacts } from "../temp-db/contacts";

export default function Home() {
    const router = useRouter();

    function renderTitleSect() {
        return (
            <section className={homeStyle["title-section"]}>
                <header className={homeStyle["title-header"]}>
                    <div className={homeStyle["title-text"]}>
                        <h1 className={homeStyle["title"]}>Hi, I’m Siravit P!</h1>
                        <p className={homeStyle["subtitle"]}>
                            I’m a high school student at Suankularb Wittayalai School that has fallen in love with web development and design, particulary with React.
                        </p>
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
                <div className={homeStyle["title-background-container"]}>
                    <div className={homeStyle["title-background"]}>
                        <div className={homeStyle["title-image"]}>
                            <Image src={holdingImage} layout="fill" objectFit="contain" objectPosition="right bottom"
                                alt="Siravit Phokeed holding up a laptop showcasing his computer progamming projects" />
                        </div>
                        <Laptop />
                    </div>
                </div>
            </section>
        );
    }

    function renderWorkSect(works) {
        function renderWorks(works) {
            return (
                <div className={homeStyle["work-grid"]}>
                    {works.map(work =>
                        <Link key={work.id} href={`/work/${work.id}`}>
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
                    <button className={homeStyle["continue-button"]} onClick={() => router.push("/work?type=all")}>
                        See all
                    </button>
                </div>
            </section>
        );
    }

    function renderLangsSect() {
        return (
            <section className={homeStyle["langs-section"]}>
                <div className={homeStyle["header"]}>
                    <h2 className={homeStyle["header-header"]}>I’m also comfortable with…</h2>
                </div>
                <div className={homeStyle["langs-main"]}>
                    <div className={homeStyle["langs-column"]}>
                        <div className={homeStyle["langs-row-1"]}>
                            <div className={homeStyle["langs-lang"]}>
                                <Image src={langNextImage} alt="Next JS" />
                            </div>
                            <div className={homeStyle["langs-lang"]}>
                                <Image src={langSassImage} alt="Sass" />
                            </div>
                        </div>
                        <div className={homeStyle["langs-row-2"]}>
                            <div className={homeStyle["langs-lang"]}>
                                <Image src={langReactImage} alt="React JS" />
                            </div>
                            <div className={homeStyle["langs-lang"]}>
                                <Image src={langCppImage} alt="C++" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={homeStyle["continue-button"]} onClick={() => router.push("/langs")}>
                            See all
                        </button>
                    </div>
                </div>
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
                        {contacts.map(contact =>
                            <a className={homeStyle["work-card"]} key={contact.id} href={contact.url} target="_blank" rel="noreferrer">
                                <h3>{contact.name}</h3>
                                <p>{contact.type}</p>
                            </a>
                        )}
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
                        <input type="text" placeholder="John Doe" />
                        <input type="email" placeholder="johndoe@example.com" />
                    </div>
                    <input type="text" className={homeStyle["contact-title"]} placeholder="I’d like to contact you about this" />
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
        <main className={homeStyle["main"]}>
            {renderTitleSect()}
            {renderWorkSect(works)}
            {renderLangsSect()}
            {renderContactSect(contacts)}
        </main>
    );
}
