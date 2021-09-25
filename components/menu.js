// ReactJs import
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function Menu() {
    const router = useRouter();
    console.log(router.asPath);

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
                { name: "Projects", url: "/work?type=project" },
                { name: "Certificates", url: "/work?type=certificate" },
                { name: "Contact", url: "/#contact" }
            ])}
        </nav>
    )
}