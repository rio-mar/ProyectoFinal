import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./app/firebase.js";
import { showMessage } from "./app/showMessage.js";

// Selección del formulario de registro en el DOM
const signupForm = document.querySelector("#signup-form");



// Evento 'submit' del formulario de registro
signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    console.log(email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential)

      alert("Creando una cuenta...");
      window.location.href="letras_encantadas.html"

        

    } catch (error) {
      // Manejo de errores
        console.error("Error al crear la cuenta:", error);
        console.log("Error al crear la cuenta: " + error.message); 
        
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Correo en uso", "error")
          } else if (error.code === 'auth/invalid-email') {
            showMessage("Correo invalido", "error")
          } else if (error.code === 'auth/weak-password') {
            showMessage("contraseña débil", "error")
          } else if (error.code) {
            showMessage("Algo fue mal, vuelve a intentar", "error")
          }
    }
});

