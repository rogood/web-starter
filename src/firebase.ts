import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

if (!firebase.apps.length) {
    const configString = process.env.FIREBASE_CONFIG.replace(/\\/g, '')
    const config = JSON.parse(configString)

    firebase.initializeApp(config)
}

export const db = firebase.firestore
export const auth = firebase.auth
