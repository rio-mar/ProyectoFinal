// funciones del formulario 

// Selecciona elementos del DOM
const container =document.querySelector(".container") ;
const loginForm=document.querySelector('.login-form')
const RegisterForm=document.querySelector('.Register-form');
const RegiBtn=document.querySelector('.RegiBtn');
const LoginBtn=document.querySelector('.LoginBtn');

// Evento para mostrar el formulario de registro y ocultar el de inicio de sesión
RegiBtn.addEventListener('click',()=>{
    RegisterForm.classList.add('active');
    loginForm.classList.add('active')
})
// Evento para mostrar el formulario de inicio de sesión y ocultar el de registro
LoginBtn.addEventListener('click',()=>{
    RegisterForm.classList.remove('active');
    loginForm.classList.remove('active')
})




import "./app/firebase.js";
import "./signupForm.js";
import "./app/googleLogin.js";

// Importación de funciones específicas de Firebase para autenticación por correo y contraseña
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import { showMessage } from "./app/showMessage.js";

// Selección del formulario de inicio de sesión en el DOM
const signinForm= document.querySelector("#signin-form");

// Evento 'submit' del formulario de inicio de sesión
signinForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    // Obtención de los valores de correo electrónico y contraseña desde el formulario
    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;


    try {
        const credentials = await signInWithEmailAndPassword (auth, email, password);
        console.log(credentials)

      window.location.href="letras_encantadas.html"
        


    } catch (error) {
      // Manejo de errores durante el inicio de sesión
        if (error.code === 'auth/invalid-login-credentials') {
            showMessage("Usuario o Clave incorrectas", "error")
          } else {
            showMessage("Algo fue mal", "error")
          }
          console.log(error)
        }
        
    }

)