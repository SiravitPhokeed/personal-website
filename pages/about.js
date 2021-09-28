// Modules import
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Icon import
import { MdLaunch } from "react-icons/md";

// Style sheet import
import aboutStyle from "../styles/pages/about.module.scss";

// Temporary database import
import { about } from "../temp-db/about";

export default function About() {
    return (
        <div className={aboutStyle["main"]}>
            <h1 className={aboutStyle["header"]}>
                Who is Siravit P?
            </h1>
            <main className={aboutStyle["content"]}>
                <div className={aboutStyle["content-card"]}>
                    <h2>Hi there!</h2>
                    <ReactMarkdown className="markdown">
                        {about.generic}
                    </ReactMarkdown>
                </div>
                <div className={aboutStyle["content-card"]}>
                    <h2>Education</h2>
                    <div className={aboutStyle["edu-grid"]}>
                        {about.education.map(school => 
                            <a key={school.id} href={school.url} className="card" target="_blank" rel="noreferrer">
                                <h3>{school.name}</h3>
                                <p><strong>Year:</strong> {school.yearBE} / {school.yearAD}</p>
                                <p><strong>Level:</strong> {school.level}</p>
                            </a>
                        )}
                    </div>
                </div>
                <div className={aboutStyle["content-card"]}>
                    <h2>How I Code</h2>
                    <ReactMarkdown className="markdown">
                        {about.howICode}
                    </ReactMarkdown>
                    <Link href="/work?type=project">
                        <a className={aboutStyle["how-link"]}>
                            See how I code! <MdLaunch />
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}