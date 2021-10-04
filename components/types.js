// Style sheet import
import badgeStyle from "../styles/components/badge.module.scss";

export function Types({ types }) {
    let key = {
        activity: "Activity",
        certificate: "Certificate",
        project: "Project",
    }
    return (
        <ul className={badgeStyle["badge-container"]}>
            {types.map((type, index) =>
                <li key={index} className={badgeStyle["badge-type"]}>
                    {key[type]}
                </li>
            )}
        </ul>
    );
}