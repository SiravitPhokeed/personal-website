// Style sheet import
import langStyle from "../styles/pages/langs.module.scss";

// Temporary database import
import { langs } from "../temp-db/langs";

export default function All() {
    return (
        <div className={langStyle["main"]}>
            <header className={langStyle["header"]}>
                <h1>Languages I’ve used</h1>
            </header>
            <main className={langStyle["content"]}>
                <div className="grid">
                    {langs.map(lang =>
                        <div key={lang.id} className="card">
                            <h3>{lang.name}</h3>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}