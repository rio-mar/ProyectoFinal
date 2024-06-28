 librosdetulista = localStorage.getItem("libros-en-lista");
 librosdetulista = JSON.parse(librosdetulista);


const contenedorTulistadelibros = document.querySelector("#Tulista-libros");
const contenedorTulistavacia = document.querySelector("#Tulista-vacia");
const contenedorTulistaaciones = document.querySelector("#Tulista-acciones");
let botonesEliminar = document.querySelectorAll(".Tulista-libro-eliminar");
const botonvaciar = document.querySelector(".Tulista-acciones-vaciar")

function cargarlibrosdetulista(){

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
                    <button class="Tulista-libro-eliminar" id="${libro.id}"><i class="bi bi-trash"></i></button>
        
         `;
    contenedorTulistadelibros.append(div);
    
    
        })
    
    
    
    }
    else{
        contenedorTulistavacia.classList.remove("disabled");
        contenedorTulistadelibros.classList.add("disabled");
        contenedorTulistaaciones.classList.add("disabled");
    }

    actualizarBotonesEliminar()
}

cargarlibrosdetulista();



function actualizarBotonesEliminar(){
    
    botonesEliminar = document.querySelectorAll(".Tulista-libro-eliminar");

    botonesEliminar.forEach(boton => boton.addEventListener("click",eliminardelalista));
    
}

function eliminardelalista(e){

    const idBoton = e.currentTarget.id;
    const index = librosdetulista.findIndex(libro => libro.id === idBoton);
    librosdetulista.splice(index,1);
    cargarlibrosdetulista();
    localStorage.setItem("libros-en-lista",JSON.stringify(librosdetulista));
}

botonvaciar.addEventListener("click",vaciarlista )


function vaciarlista(){
    Swal.fire({
        title: "¿Esta segur@ de vaciar tu lista?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Se ha vaciado su lista con exito", "", "success");
    
    
          librosdetulista.length = 0;
          localStorage.setItem("libros-en-lista",JSON.stringify(librosdetulista));
          cargarlibrosdetulista();
        } 
      });
  
}

