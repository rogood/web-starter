import { User } from 'firebase'
import firebase from '../firebase'

const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export async function signIn(): Promise<void> {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    const result = await firebase.auth().signInWithPopup(provider)

    const user = result.user

    const document = await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()

    if (!document || !document.exists) {
        db.collection('users').doc(user.uid).set({
            fullName: user.displayName,
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
}

export function getLoggedInUser(): User {
    return firebase.auth().currentUser
}
