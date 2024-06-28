import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./app/firebase.js";

import "./app/firebase.js";
import "./signupForm.js";
import "./signinForm.js";
import "./app/googleLogin.js";

// Espera a que el DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('form-container');

    // Crear y añadir el formulario de inicio de sesión al contenedor
    const loginForm = createForm('Acceder', 'signin-form', 'login-email', 'login-password', 'Acceder');
    container.appendChild(loginForm);

    // Crear y añadir el formulario de registro al contenedor
    const registerForm = createForm('Registrate', 'signup-form', 'signup-email', 'signup-password', 'Registrarse');
    container.appendChild(registerForm);
});

// Función para crear un formulario con los elementos especificados
function createForm(title, formId, emailId, passwordId, buttonText) {
    // Crear el contenedor del formulario
    const formDiv = document.createElement('div');
    formDiv.classList.add('Form', `${title.toLowerCase()}-form`);

    // Crear el título del formulario
    const formTitle = document.createElement('h2');
    formTitle.textContent = title;
    formDiv.appendChild(formTitle);

    // Crear el elemento del formulario
    const form = document.createElement('form');
    form.id = formId;
    form.action = '#';
    formDiv.appendChild(form);

    // Crear y añadir la caja de entrada para el correo electrónico
    const emailBox = createInputBox('Correo electronico', 'email', emailId, 'Ingresa tu Correo electronico*', 'bx bxs-user');
    form.appendChild(emailBox);

    // Crear y añadir la caja de entrada para la contraseña
    const passwordBox = createInputBox('Contraseña', 'password', passwordId, 'Ingresa tu contraseña*', 'bx bxs-envelope');
    form.appendChild(passwordBox);

    // Añadir sección de "Recordar" y "Contraseña olvidada" sólo al formulario de inicio de sesión
    if (formId === 'signin-form') {
        const forgotSection = document.createElement('div');
        forgotSection.classList.add('forgot-section');

        // Añadir opción de "Recordar"
        const rememberSpan = document.createElement('span');
        const rememberCheckbox = document.createElement('input');
        rememberCheckbox.type = 'checkbox';
        rememberCheckbox.id = 'checked';
        rememberSpan.appendChild(rememberCheckbox);
        rememberSpan.appendChild(document.createTextNode('Recordar'));
        forgotSection.appendChild(rememberSpan);

        // Añadir enlace de "Contraseña olvidada"
        const forgotLinkSpan = document.createElement('span');
        const forgotLink = document.createElement('a');
        forgotLink.href = '#';
        forgotLink.textContent = 'Contraseña olvidada?';
        forgotLinkSpan.appendChild(forgotLink);
        forgotSection.appendChild(forgotLinkSpan);

        form.appendChild(forgotSection);
    }

    // Crear y añadir el botón de envío del formulario
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn');
    submitButton.textContent = buttonText;
    form.appendChild(submitButton);

    // Añadir texto "Iniciar sesion con"
    const socialMediaText = document.createElement('p');
    socialMediaText.textContent = 'Iniciar sesion con';
    formDiv.appendChild(socialMediaText);

    // Añadir botón de Google para el inicio de sesión con redes sociales
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');
    const googleButton = document.createElement('button');
    googleButton.type = 'button';
    googleButton.id = 'googleLogin';
    const googleIcon = document.createElement('i');
    googleIcon.classList.add('bx', 'bxl-google');
    googleButton.appendChild(googleIcon);
    socialMediaDiv.appendChild(googleButton);
    formDiv.appendChild(socialMediaDiv);

    // Añadir enlace de registro o inicio de sesión según el formulario
    const registerLinkP = document.createElement('p');
    registerLinkP.classList.add(formId === 'signin-form' ? 'RegisteBtn' : 'LoginBtn');
    const registerLink = document.createElement('a');
    registerLink.href = '#';
    registerLink.textContent = formId === 'signin-form' ? '¿No estás registrado?' : 'Registrate ahora';
    registerLinkP.appendChild(registerLink);
    formDiv.appendChild(registerLinkP);

    return formDiv;
}

// Función para crear una caja de entrada con su icono, etiqueta y campo de entrada
function createInputBox(labelText, inputType, inputId, placeholderText, iconClass) {
    const inputBox = document.createElement('div');
    inputBox.classList.add('input-box');

    // Crear y añadir el icono
    const icon = document.createElement('i');
    icon.classList.add(...iconClass.split(' '));
    inputBox.appendChild(icon);

    // Crear y añadir la etiqueta
    const label = document.createElement('label');
    label.textContent = labelText;
    inputBox.appendChild(label);

    // Crear y añadir el campo de entrada
    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.placeholder = placeholderText;
    inputBox.appendChild(input);

    return inputBox;
}
