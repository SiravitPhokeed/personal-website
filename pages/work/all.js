// ReactJS import
import Link from "next/link";

// Style sheet import
import worksStyle from "../../styles/pages/works.module.scss";

// Temporary database import
import { works } from "../../temp-db/works";

export default function All() {
    return (
        <div className={worksStyle["main"]}>
            <header className={worksStyle["header"]}>
                <h1>Stuff I’ve worked on</h1>
            </header>
            <nav className={worksStyle["navigation"]}>
                <Link href="/work/all">All</Link>
                <Link href="/work/projects">Projects</Link>
                <Link href="/work/certificates">Certificates</Link>
            </nav>
            <main className={worksStyle["content"]}>
                <div className="grid">
                    {works.map(work =>
                        <Link key={work.id} href={`/work/${work.id}`}>
                            <a className="card">
                                <div className={worksStyle["work-content"]}>
                                    <div>
                                        <h3>{work.name}</h3>
                                        <p>{work.desc}</p>
                                    </div>
                                    <span className={worksStyle["work-type"]}>
                                        {`${work.type[0].toUpperCase()}${work.type.slice(1)}`}
                                    </span>
                                </div>
                            </a>
                        </Link>
                    )}
                </div>
            </main>
        </div>
    );
}