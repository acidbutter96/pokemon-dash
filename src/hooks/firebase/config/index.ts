import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebaseConfig'

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const database = firebaseApp.firestore()

export const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
        const result = await firebase.auth().signInWithPopup(provider)
        return result
    } catch (err) {
        console.error(err)
    }
}