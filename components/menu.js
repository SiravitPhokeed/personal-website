// ReactJs import
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function Menu() {
    const router = useRouter();

    function renderMenuItems(pages) {
        return (
            <>
                {pages.map((page, index) =>
                    <Link key={index} href={page.url}>
                        <a className={router.asPath === page.url ? "activated" : null}>
                            {page.name}
                        </a>
                    </Link>
                )}
            </>
        );
    }

    return (
        <nav className="menu">
            {renderMenuItems([
                { name: "Home", url: "/" },
                { name: "Portfolio", url: "/work?type=all" },
                { name: "Languages", url: "/langs" },
                { name: "Contact", url: "/#contact" }
            ])}
        </nav>
    )
}