import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

import config from '../firebase.config.json'

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export const db = firebase.firestore
export const auth = firebase.auth
