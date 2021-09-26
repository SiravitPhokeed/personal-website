// ReactJS import
import Link from "next/link";
import { useRouter } from "next/router";

// Style sheet import
import worksStyle from "../styles/pages/works.module.scss";

// Temporary database import
import { works } from "../temp-db/works";

export default function Works() {
    const router = useRouter();

    function renderWorkLangs(type, uses) {
        return (
            <ul className={worksStyle["work-uses"]}>
                <span className={worksStyle["work-type"]}>
                    {`${type[0].toUpperCase()}${type.slice(1)}`}
                </span>
                {uses.filter(lang => lang.main).map(lang =>
                    <li className={worksStyle["work-lang"]}>
                        {lang.name}
                    </li>
                )}
            </ul>
        )
    }

    function renderWorksGrid(works) {
        let type = router.query.type || "all";
        let uses = router.query.uses;
        let filterred_works = [];
        
        if (type === "all")
            filterred_works = works;
        else if (uses)
            filterred_works = works.filter(work => work.type === type && work.uses.filter(lang => lang.name === uses).length > 0);
        else
            filterred_works = works.filter(work => work.type === type);

        return (
            <div className="grid">
                {filterred_works.map(work =>
                    <Link key={work.id} href={`/work/${work.id}`}>
                        <a className="card">
                            <div className={worksStyle["work-content"]}>
                                <div>
                                    <h3>{work.name}</h3>
                                    <p>{work.desc}</p>
                                </div>
                                {renderWorkLangs(work.type, work.uses || [])}
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        );
    }

    function renderMenuItems(pages) {
        return (
            <>
                {pages.map((page, index) =>
                    <Link key={index} href={page.url}>
                        <a className={router.query.type === page.query ? worksStyle["activated"] : null}>
                            {page.name}
                        </a>
                    </Link>
                )}
            </>
        );
    }

    return (
        <div className={worksStyle["main"]}>
            <header className={worksStyle["header"]}>
                <h1>Stuff I’ve worked on</h1>
            </header>
            <nav className={worksStyle["navigation"]}>
                {renderMenuItems([
                    { name: "All", query: "all", url: "/work?type=all" },
                    { name: "Projects", query: "project", url: "/work?type=project" },
                    { name: "Certificates", query: "certificate", url: "/work?type=certificate" },
                ])}
            </nav>
            <main className={worksStyle["content"]}>
                {renderWorksGrid(works)}
            </main>
        </div>
    );
}