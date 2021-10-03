export default function CreateWork() {
    return (
        <div>
            <br />
            <br />
            <br />
            <form onSubmit={e => e.preventDefault()}>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea />
                </div>
                <div>
                    <label>Full Description</label>
                    <textarea />
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}