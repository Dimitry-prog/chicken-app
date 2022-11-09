import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCRwusZ8rZ-UA_aTJhRG5hyVM48gsiItwY",
    authDomain: "food-app-65022.firebaseapp.com",
    databaseURL: "https://food-app-65022-default-rtdb.firebaseio.com",
    projectId: "food-app-65022",
    storageBucket: "food-app-65022.appspot.com",
    messagingSenderId: "825652035609",
    appId: "1:825652035609:web:f59614c8909a7b2dbc6a88"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore();
const storage = getStorage();

export {app, firestore, storage}