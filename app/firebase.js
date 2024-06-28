
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUS-Uo4aZsLx60rbGfocpHmspuur-9-Q",
  authDomain: "login-967a2.firebaseapp.com",
  projectId: "login-967a2",
  storageBucket: "login-967a2.appspot.com",
  messagingSenderId: "441836361702",
  appId: "1:441836361702:web:9e6517d994112a209e2827"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación
export const auth = getAuth(app)

