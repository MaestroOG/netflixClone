import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import config from "./config/config";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.senderId,
    appId: config.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await getDoc(collection(db, "user", {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        }))
    } catch (error) {
        console.log(error);
        // alert(error);
        toast.error(error)
    }
}

const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        // alert(error);
        toast.error(error)
    }
}

const logout = () => {
    try {
        signOut(auth)
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

export { auth, db, login, signup, logout };