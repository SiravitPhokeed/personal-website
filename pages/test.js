// import firebase from "../firebase/client-app.js";
import testStyle from "../styles/pages/test.module.scss";

export default function test() {
    // firebase.firestore().collection('portfolio').doc('hiTJwq354Pzs9ufQz17G').set({
        // name: "Ramathibodi Pitching Challenge Certificate",
        // desc: "An idea competition on the topic of healthcare innovation",
        // fullDesc: "An idea competition on the topic of healthcare innovation to help encourage high school students who aim to improve the future of healthcare",
        // types: [
        //     "certificate"
        // ],
        // links: [
        //     { name: "Certificate", url: "https://firebasestorage.googleapis.com/v0/b/rama-pitching-2021.appspot.com/o/certificates%2Fmzw8BaFV2uQD7fv697cIB0FDjpi2%2Fparticipation_member_2.pdf?alt=media&token=ae3bf13b-c842-4276-9329-3ab6f93bbf63" },
        //     { name: "Information", url: "https://ramathibodi-rpc.org/"}
        // ]
    // })
    // return <div />;

    return (
        <main>
            <br />
            <br />
            <br />
            <button className={testStyle["button"]}>
                Hi
            </button>
        </main>
    );
}