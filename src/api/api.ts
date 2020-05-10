import firebase from '../firebase'

const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export async function signIn(): Promise<void> {
    const result = await firebase.auth().signInWithPopup(provider)

    const user = result.user

    db.collection('users').doc(user.uid).set({
        fullName: user.displayName,
        email: user.email,
    })
}

export function getLoggedInUser(): any {
    return firebase.auth().currentUser
}
