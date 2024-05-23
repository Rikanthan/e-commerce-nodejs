import { initializeApp } from 'firebase/app';
import config from './config.js';


const firebaseConfig = {
    apiKey: "AIzaSyDX32QaCn5O4Q9zxzU41sa4AUYXjST_Qvw",
    authDomain: "e-commerce-397f6.firebaseapp.com",
    projectId: "e-commerce-397f6",
    storageBucket: "e-commerce-397f6.appspot.com",
    messagingSenderId: "53910297175",
    appId: "1:53910297175:web:53061b2fe34150a88c2112"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
const firebase = initializeApp(firebaseConfig);

export default firebase;