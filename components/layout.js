import { Menu } from "./menu.js";

export default function Layout({ children }) {
    return (
        <>
            <Menu />
            <div>
                {children}
            </div>
        </>
    );
}