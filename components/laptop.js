// Modules import
import Image from "next/image";
import Link from "next/link";

// Icon import
import { MdLaunch } from "react-icons/md";

// Photos import
import emocialImage from "../public/index-emocial.png";

// Style sheet import
import laptopStyle from "../styles/components/laptop.module.scss";

export function Laptop() {
    return (
        <div className={laptopStyle["laptop-container"]}>
            <div className={laptopStyle["laptop-screen"]}>
                <Image src={emocialImage} objectFit="contain" className={laptopStyle["laptop-screen-inner"]}
                    alt="A laptop screen cycling through Siravit Phokeed's computer progamming projects" />
            </div>
            <div className={laptopStyle["laptop-keyboard"]} />
            <div className={laptopStyle["laptop-keyboard-content"]}>
                <h3>Emocial</h3>
                <Link href="/work/Emocial">
                    <a>Learn more about this project <MdLaunch /></a>
                </Link>
            </div>
        </div>
    )
}