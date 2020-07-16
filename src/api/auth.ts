import { auth } from '../firebase'

const provider = new auth.GoogleAuthProvider()

export async function signIn(): Promise<void> {
    await auth().setPersistence(auth.Auth.Persistence.LOCAL)
    const result = await auth().signInWithRedirect(provider)
    // eslint-disable-next-line no-undef
    console.log(result)
}

export async function signOut(): Promise<void> {
    await auth().signOut()
}
