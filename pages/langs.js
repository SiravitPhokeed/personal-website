// ReactJS import
import Link from "next/link";

// Style sheet import
import langStyle from "../styles/pages/langs.module.scss";

// Temporary database import
import { langs } from "../temp-db/langs";

export default function All() {
    return (
        <div className={langStyle["main"]}>
            <header className={langStyle["header"]}>
                <h1>Languages I use</h1>
                <p><strong>Tip</strong>: Click on a language to filter my projects by language!</p>
            </header>
            <main className={langStyle["content"]}>
                <div className="grid">
                    {langs.map(lang =>
                        <Link href={`/work?type=project&uses=${lang.name}`}>
                            <a key={lang.id} className="card">
                                <h3>{lang.name}</h3>
                            </a>
                        </Link>
                    )}
                </div>
            </main>
        </div>
    );
}