import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyBXyAVImFBMp6OAdzBez-xYw0WQFOEUUhM",
    authDomain: "ecommerce-webs.firebaseapp.com",
    projectId: "ecommerce-webs",
    storageBucket: "ecommerce-webs.appspot.com",
    messagingSenderId: "741739691219",
    appId: "1:741739691219:web:e9a2a5b9868dd4896d2826",
    measurementId: "G-KLTS4878EZ"
};

const app = initializeApp(config)
const db = getFirestore(app);

