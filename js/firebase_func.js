import { app, db, collection, getDocs, addDoc } from "./firebase_init.js";

export async function createDoc(collectionName, data) {
    const result = await addDoc(collection(db, collectionName), data);

    return result;
}

export async function readDocs(collectionName) {
    const result = await getDocs(collection(db,collectionName));
    
    return result;
}