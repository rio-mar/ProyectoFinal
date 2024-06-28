import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import { showMessage } from "./app/showMessage.js";


const signinForm= document.querySelector("#signin-form");

signinForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;


    try {
        const credentials = await signInWithEmailAndPassword (auth, email, password);
        console.log(credentials)

        // Close the login modal
        // const modal = bootstrap.Modal.getInstance(signinForm.closest('.modal'));
        // modal.hide();
        //  // reset the form
        // signinForm.reset();

       

        
      window.location.href="letras_encantadas.html"
        


    } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {
            showMessage("Usuario o Clave incorrectas", "error")
          } else {
            showMessage("Something went wrong", "error")
          }
          console.log(error)
        }
        
    }

    
)