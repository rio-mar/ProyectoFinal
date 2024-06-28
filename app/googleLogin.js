//// Importa el proveedor de autenticación de Google y la función signInWithPopup desde Firebase Authentication
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";


const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();
  // Crea una nueva instancia del proveedor de autenticación de Google
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    //http://localhost:5501/src/index.html?#
    window.location.href="letras_encantadas.html"
    // Redirige a la página 'letras_encantadas.html' después de iniciar sesión exitosamente
    
  } catch (error) {
    console.log(error);
  }
});