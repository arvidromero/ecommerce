// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_dxDx4u5WA-NuR6V7Thi2vMr57yLaUE",
  authDomain: "ecommerce2023-28dd0.firebaseapp.com",
  projectId: "ecommerce2023-28dd0",
  storageBucket: "ecommerce2023-28dd0.appspot.com",
  messagingSenderId: "49277309768",
  appId: "1:49277309768:web:bf5bff4a4b599fef51597d"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

