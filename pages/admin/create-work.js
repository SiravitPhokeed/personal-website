// Modules import
import { useState } from "react";

// Style sheet import
import formStyle from "../../styles/pages/admin-form.module.scss";

// Components import
import { Skills } from "../../components/skills";

export default function CreateWork() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [fullDesc, setFullDesc] = useState("");
    const [types, setTypes] = useState([]);
    const [skills, setSkills] = useState([]);
    const [links, setLinks] = useState([]);
    const [preview, setPreview] = useState(null);

    const [linkInput, setLinkInput] = useState({
        name: "",
        url: ""
    })
    const [skillInput, setSkillInput] = useState({
        name: "",
        main: true
    })

    function renderLinkInput() {
        return (
            <fieldset className={formStyle["link-form"]}>
                <div className={formStyle["form-item"]}>
                    <label>Display text</label>
                    <input type="text" onChange={e => setLinkInput({ url: linkInput.url, name: e.target.value })} value={linkInput.name} />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>URL</label>
                    <input type="url" onChange={e => setLinkInput({ url: e.target.value, name: linkInput.name })} value={linkInput.url} />
                </div>
                <div className={formStyle["submit-button-container"]}>
                    <button className={formStyle["submit-button"]}
                        onClick={e => {e.preventDefault(); setLinks([...links, linkInput])}}>
                        Add
                    </button>
                </div>
            </fieldset>
        );
    }

    function renderSkillsInput() {
        return (
            <fieldset className={formStyle["link-form"]}>
                <div className={formStyle["form-item"]}>
                    <label>Skill</label>
                    <input type="text"
                        onChange={e => setSkillInput({ name: e.target.value, main: skillInput.main })} value={skillInput.name} />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Main?</label>
                    <div className={formStyle["skills-radio"]}
                        onChange={e => setSkillInput({ name: skillInput.name, main: e.target.value })} value={skillInput.main}>
                        <div>
                            <input type="radio" id="true" name="skills-main" value={true} />
                            &nbsp;Yes
                        </div>
                        <div>
                            <input type="radio" id="false" name="skills-main" value={false} />
                            &nbsp;No
                        </div>
                    </div>
                </div>
                <div className={formStyle["submit-button-container"]}>
                    <button className={formStyle["submit-button"]}
                        onClick={e => {e.preventDefault(); setSkills([...skills, skillInput])}}>
                        Add
                    </button>
                </div>
            </fieldset>
        );
    }

    function renderLinks(links) {
        return (
            <table className={formStyle["table"]}>
                <thead>
                    <tr>
                        <th className={formStyle["table-name"]}>Display text</th>
                        <th className={formStyle["table-url"]}>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map(link =>
                        <tr>
                            <td>{link.name}</td>
                            <td><a href={link.url} target="_blank" referrerPolicy="noreferrer">{link.url}</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    return (
        <main className={formStyle["main"]}>
            <form onSubmit={e => e.preventDefault()} className={formStyle["form"]}>
                <div className={formStyle["form-item"]} onChange={e => setName(e.target.value)} value={name}>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className={formStyle["form-item"]} onChange={e => setDesc(e.target.value)} value={desc}>
                    <label>Description</label>
                    <textarea />
                </div>
                <div className={formStyle["form-item"]} onChange={e => setFullDesc(e.target.value)} value={fullDesc}>
                    <label>Full Description</label>
                    <textarea />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Links</label>
                    {renderLinks(links)}
                    {renderLinkInput()}
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Skills</label>
                    <Skills skills={skills} mainOnly={false} />
                    {renderSkillsInput()}
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Types</label>
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Preview</label>
                    <input type="file" />
                </div>
                <div className={formStyle["submit-button-container"]}>
                    <button className={formStyle["submit-button"]}>
                        Create
                    </button>
                </div>
            </form>
        </main>
    )
}