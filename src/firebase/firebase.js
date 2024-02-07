import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSwTn9-16aCY7-SYk-M0TJKzD7Mkyb0Q4',
  authDomain: 'glowmarkt-bde85.firebaseapp.com',
  projectId: 'glowmarkt-bde85',
  storageBucket: 'glowmarkt-bde85.appspot.com',
  messagingSenderId: '684576654113',
  appId: '1:684576654113:web:4939ec2f1bc93262e47460',
  measurementId: 'G-W907WNWD4K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
