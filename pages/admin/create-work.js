import formStyle from "../../styles/pages/admin-form.module.scss";

export default function CreateWork() {
    function renderLinkInput() {
        return (
            <form className={formStyle["link-form"]}>
                <div className={formStyle["form-item"]}>
                    <label>Display text</label>
                    <input type="text" />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>URL</label>
                    <input type="url" />
                </div>
                <div className={formStyle["submit-button-container"]}>
                    <button className={formStyle["submit-button"]}>
                        Add
                    </button>
                </div>
            </form>
        );
    }

    return (
        <main className={formStyle["main"]}>
            <form onSubmit={e => e.preventDefault()} className={formStyle["form"]}>
                <div className={formStyle["form-item"]}>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Description</label>
                    <textarea />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Full Description</label>
                    <textarea />
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Links</label>
                    {renderLinkInput()}
                </div>
                <div className={formStyle["form-item"]}>
                    <label>Skills</label>
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