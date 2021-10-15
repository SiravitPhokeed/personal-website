// Modules import
import Link from "next/link";
import Image from "next/image";
import firebase from "../firebase/client-app.js";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";

// Style sheet import
import worksStyle from "../styles/pages/works.module.scss";

// Components import
import { Types } from "../components/types.js";
import { Skills } from "../components/skills.js";

// Photos import
import placeholderCertificate from "../public/work-certificate.png";
import placeholderProject from "../public/work-project.png";

export async function getServerSideProps() {
    const collection = firebase.firestore().collection("portfolio");
    const items = (await collection.get()).docs;
    const portfolio = items.map((item) => item.data());
    return ({ props: { portfolio } });
}

export default function Works({ portfolio }) {
    const router = useRouter();

    function renderWorksGrid(works) {
        let type = router.query.type || "all";
        let uses = router.query.uses;
        let filterred_works = [];
        
        if (type === "all")
            filterred_works = works;
        else if (uses)
            filterred_works = works.filter(
                work => work.types.includes(type) &&
                work.skills.filter(lang => lang.name === uses).length > 0
            );
        else
            filterred_works = works.filter(work => work.types.includes(type));

        return (
            <div className="grid">
                {filterred_works.map(work =>
                    <Link key={work.name} href={`/work/${work.name}`}>
                        <a className="card">
                            <div className={worksStyle["work-content"]}>
                                <div className={worksStyle["work-upper"]}>
                                    <div className={worksStyle["work-image"]}>
                                        <Image src={work.preview ? work.preview :
                                            work.type === "certificate" ? placeholderCertificate : placeholderProject}
                                            layout="fill" objectFit="contain" />
                                    </div>
                                    <div>
                                        <h3>{work.name}</h3>
                                        <p>{work.desc}</p>
                                    </div>
                                </div>
                                <div className={worksStyle["work-badges"]}>
                                    <Types types={work.types || []} />
                                    <Skills skills={work.skills || []} mainOnly={true} />
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
                {renderWorksGrid(portfolio)}
            </main>
        </div>
    );
}