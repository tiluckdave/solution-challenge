import firebase_app from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export async function addStory(data) {
    let result = null;
    let error = null;

    console.log(data)

    try {
        result = await addDoc(collection(db, 'stories'), data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}