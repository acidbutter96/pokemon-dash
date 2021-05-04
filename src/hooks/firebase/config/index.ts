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

        return err
        //then deal with that errors marcos :x
    }
}

export const createAndLogin = async (email: string, password: string) => {
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)

        return result
    } catch (err) {
        console.error(err.message)

        return err
        //do something to warn
    }
}

export const emailLogin = async (email: string, password: string) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password)

        return result
    } catch (err) {
        console.error(err.message)

        return err
        //gotta catch all errors
    }
}

export const signOutFirebase = async () => {
    try {
        const result = firebase.auth().signOut()

        return true
    } catch (err) {
        console.error(err.message)

        return false
    }

}