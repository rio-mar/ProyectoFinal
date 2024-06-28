 librosdetulista = localStorage.getItem("libros-en-lista");
 librosdetulista = JSON.parse(librosdetulista);

// Selección de elementos del DOM necesarios para mostrar la lista de libros
const contenedorTulistadelibros = document.querySelector("#Tulista-libros");
const contenedorTulistavacia = document.querySelector("#Tulista-vacia");
const contenedorTulistaaciones = document.querySelector("#Tulista-acciones");
let botonesEliminar = document.querySelectorAll(".Tulista-libro-eliminar");
const botonvaciar = document.querySelector(".Tulista-acciones-vaciar")

// Función para cargar y mostrar los libros almacenados en la lista
function cargarlibrosdetulista(){
    // Si no hay libros en la lista, muestra el mensaje de lista vacía
    if(librosdetulista && librosdetulista.length > 0 ){
        contenedorTulistavacia.classList.add("disabled");
        contenedorTulistadelibros.classList.remove("disabled");
        contenedorTulistaaciones.classList.remove("disabled");
        contenedorTulistadelibros.innerHTML ="";
    
        librosdetulista.forEach(libro =>{
    
        const div = document.createElement("div");
        div.classList.add("Tulista-libro");
        div.innerHTML = 
        `
        
          <img class="Tulista-libro-imagen" src="${libro.imagen}" alt="${libro.titulo}">
                    
                <div class="Tulista-libros-titulo">
                    <small>Titulo</small>
                    <h3>${libro.titulo}</h3>

                </div>
                <div class="Tulista-libros-titulo">
                    <small>Autor</small>
                    <h3>${libro.autor}</h3>

                </div>
                <button class="Tulista-libro-eliminar" id="${libro.id}"><i class="bi bi-trash"></i></button>`;
            contenedorTulistadelibros.append(div);
    
    
        })
    
    
    
    }
    else{
        contenedorTulistavacia.classList.remove("disabled");
        contenedorTulistadelibros.classList.add("disabled");
        contenedorTulistaaciones.classList.add("disabled");
    }
    // Actualiza los botones de eliminar después de cargar la lista de libros
    actualizarBotonesEliminar();
 
}
   cargarlibrosdetulista();


function actualizarBotonesEliminar(){
     
    botonesEliminar = document.querySelectorAll(".Tulista-libro-eliminar");

    botonesEliminar.forEach(boton => boton.addEventListener("click",eliminardelalista));
    
}



// Función para eliminar un libro de la lista
function eliminardelalista(e){

    const idBoton = e.currentTarget.id;
    // Busca el índice del libro con el ID correspondiente en la lista de libros
    const index = librosdetulista.findIndex(libro => libro.id === idBoton);
    // Elimina el libro del arreglo usando el índice encontrado
    librosdetulista.splice(index,1);
    // Vuelve a cargar y mostrar la lista de libros actualizada
    cargarlibrosdetulista();
     // Actualiza localStorage con la lista de libros actualizada
    localStorage.setItem("libros-en-lista",JSON.stringify(librosdetulista));
}
// Evento click para vaciar completamente la lista de libros
botonvaciar.addEventListener("click",vaciarlista )

// Función para vaciar completamente la lista de libros
function vaciarlista(){
    // Muestra un mensaje de confirmación al usuario utilizando la librería Swal
    Swal.fire({
        title: "¿Esta segur@ de vaciar tu lista?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Se ha vaciado su lista con exito", "", "success");
    
    
          librosdetulista.length = 0; // Vacía el arreglo de libros
          // Actualiza localStorage con la lista de libros vaciada
          localStorage.setItem("libros-en-lista",JSON.stringify(librosdetulista));
          // Vuelve a cargar y mostrar la lista de libros (que ahora estará vacía)
          cargarlibrosdetulista();
        } 
      });
  
}

