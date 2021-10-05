// Style sheet import
import badgeStyle from "../styles/components/badge.module.scss";

export function Skills({ skills, mainOnly }) {
    return (
        <ul className={badgeStyle["badge-container"]}>
            {mainOnly ? skills.filter(skill => skill.main).map((skill, index) =>
                <li key={index} className={badgeStyle["badge-skill"]}>
                    {skill.name}
                </li>
            ) : skills.map((skill, index) =>
                <li key={index} className={badgeStyle[`badge-skill${skill.main ? "-main" : ""}`]}>
                    {skill.name}
                </li>
            )}
        </ul>
    );
}