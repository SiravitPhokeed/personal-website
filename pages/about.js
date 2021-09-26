// Style sheet import
import aboutStyle from "../styles/pages/about.module.scss";

export default function About() {
    return (
        <div className={aboutStyle["main"]}>
            <h1 className={aboutStyle["header"]}>
                Who is Siravit P?
            </h1>
            <main className={aboutStyle["content"]}>
                <div className={aboutStyle["content-card"]}>
                    About page
                </div>
                <div className={aboutStyle["content-card"]}>
                    <h2>Education</h2>
                </div>
                <div className={aboutStyle["content-card"]}>
                    <h2>How I Code</h2>
                </div>
            </main>
        </div>
    );
}