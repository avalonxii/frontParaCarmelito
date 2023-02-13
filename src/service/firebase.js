import { initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
    getDocs,
    addDoc,
    doc,
} from 'firebase/firestore/lite'

//conection
const firebaseConfig = {
    apiKey: 'AIzaSyAYSHastanfySax3o8YdgMMj2Q4WuQ9sBE',
    authDomain: 'ionic-app-5985e.firebaseapp.com',
    projectId: 'ionic-app-5985e',
    storageBucket: 'ionic-app-5985e.appspot.com',
    messagingSenderId: '305034574088',
    appId: '1:305034574088:web:98938d6c8db0584e9b94bd',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

//get data
async function getCities(db) {
    const citiesCol = collection(db, 'cities')
    const citySnapshot = await getDocs(citiesCol)
    const cityList = citySnapshot.docs.map((doc) => doc.data())
    return cityList
}


//set data
export const guardar = async(datos) => addDoc(collection(db, 'usuarios'), datos)
