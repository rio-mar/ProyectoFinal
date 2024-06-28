
//array multidimensional con las citas
let citas = [

  [
    "“Estar solo no tiene nada que ver <br>con cuántas personas hay alrededor”", "Revolutionary Road", "Richard Yates"
  ],
  [
    "“Las personas libres jamás podrán <br>concebir lo que los libros significan <br>para quienes vivimos encerrados”", "El diario de Ana Frank", "Ana Frank"
  ],
  [
    "“Y cuando te hayas consolado <br>(uno siempre termina por consolarse), <br>te alegrarás de haberme conocido”", "El Principito", "Antoine de Saint-Exupéry"
  ],
  [
    "“Que cosa tan traicionera pensar <br>que una persona es más que una persona”", "Paper Towns", "John Green"
  ],
  [
    "“No puedo volver al pasado porque <br>entonces era una persona diferente.”", "Alicia en el País de las Maravillas", "Lewis Carroll"
  ],
  [
    "“No hay nada como regresar a un <br>lugar que sigue igual para descubrir <br>cuánto has cambiado”", "El gran Gatsby", "F. Scott Fitzgerald"
  ],

  [
    "“La felicidad solo es real cuando se comparte.”",  'Hacia rutas salvajes', "Jon Krakauer"
  ], 
  [
    "“Solo después de haber perdido <br>todo, somos libres de hacer cualquier cosa.”", "El club de la lucha", "Chuck Palahniuk"
  ]
  

];
  
//funcion mostrar la siguiente cita
function mostrarCita() {
  // Obtener un índice aleatorio del array de citas
  var indiceAleatorio = Math.floor(Math.random() * citas.length);
    
  // Obtener la cita aleatoria usando el índice aleatorio
  var citaAleatoria = citas[indiceAleatorio];
    
  // Mostrar la cita en la página
  document.getElementById("cita").innerHTML = citaAleatoria[0];
  document.getElementById("autor").innerHTML = citaAleatoria[1];
  document.getElementById("libro").innerHTML = citaAleatoria[2];
}

// Mostrar la primera cita

mostrarCita();
// Cambiar la cita cada 10 segundos

setInterval(mostrarCita, 6000);


///alert con swal.fire

const form = document.getElementById('registroForm');
const name = document.getElementById('nombre')
const correo = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  Swal.fire({
    icon: 'success', 
    text:"¡Registro exitoso!",
    width: 350,
    padding: "1em",
    color: "#fff",
    background: "#b36e79",
    });

});














