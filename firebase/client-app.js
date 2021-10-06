// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/app-check";
import "firebase/performance"

// Firebase configuration
const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    if (typeof window !== "undefined") {
        if ("measurementId" in clientCredentials) {
            firebase.analytics();
            firebase.appCheck().activate(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                true
            );
            firebase.performance();
        }
    }
}

export default firebase;