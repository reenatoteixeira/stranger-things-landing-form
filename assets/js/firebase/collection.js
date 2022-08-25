import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToClub(subscription) {
    const db = getFirestore(app)
    const clubCollection = collection(db, "Club Subscriptions")
    const docRef = await addDoc(clubCollection, subscription)
    return docRef.id
}