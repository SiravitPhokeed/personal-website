// Modules import
import Link from "next/link";
import firebase from "../firebase/client-app.js";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";

// Style sheet import
import worksStyle from "../styles/pages/works.module.scss";

export default function Works() {
    const router = useRouter();
    const [portfolio, portfolioLoading, portfolioError] = useCollection(
        firebase.firestore().collection("portfolio"),
        {}
    );

    function renderWorkTypes(types) {
        let key = {
            activity: "Activity",
            certificate: "Certificate",
            project: "Project",
        }
        return (
            <ul className={worksStyle["work-uses"]}>
                {types.map((type, index) =>
                    <li key={index} className={worksStyle["work-type"]}>
                        {key[type]}
                    </li>
                )}
            </ul>
        );
    }

    function renderWorkLangs(uses) {
        return (
            <ul className={worksStyle["work-uses"]}>
                {uses.filter(lang => lang.main).map((lang, index) =>
                    <li key={index} className={worksStyle["work-lang"]}>
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
            filterred_works = works.filter(
                work => work.data().types.includes(type) &&
                work.data().skills.filter(lang => lang.name === uses).length > 0
            );
        else
            filterred_works = works.filter(work => work.data().types.includes(type));

        return (
            <div className="grid">
                {filterred_works.map(work =>
                    <Link key={work.data().id} href={`/work/${work.data().name}`}>
                        <a className="card">
                            <div className={worksStyle["work-content"]}>
                                <div>
                                    <h3>{work.data().name}</h3>
                                    <p>{work.data().desc}</p>
                                </div>
                                <div className={worksStyle["work-badges"]}>
                                    {renderWorkTypes(work.data().types || [])}
                                    {renderWorkLangs(work.data().skills || [])}
                                </div>
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
                    { name: "All", query: "all", url: "/portfolio?type=all" },
                    { name: "Projects", query: "project", url: "/portfolio?type=project" },
                    { name: "Certificates", query: "certificate", url: "/portfolio?type=certificate" },
                    { name: "Activities", query: "activity", url: "/portfolio?type=activity" },
                ])}
            </nav>
            <main className={worksStyle["content"]}>
                {portfolioLoading || renderWorksGrid(portfolio.docs)}
            </main>
        </div>
    );
}