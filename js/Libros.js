// Libros
const libros = [
    // array con todos los libros
    {
        id: "Libro-01",
        titulo: "Alas de hierro",
        imagen: "img/Libros/alas-de-hierro.avif",
        autor:"Rebecca Yarros",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Popular",
                    id: "popular"  
                },
                {
                    nombre: "Romance",
                    id: "romance"
    
                },
                {
                    nombre: "Nuevo",
                    id: "nuevo"
                }
    
            ]
    },
    {
        id: "Libro-02",
        titulo: "Alcatraz contra los bibliotecarios malvados",
        imagen: "img/Libros/alcatraz bibliotecarios malvados.avif",
        autor:"Brandon Sanderson",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Infantil",
                    id: "infantil"
                }
            ]
    },
    {
        id: "Libro-03",
        titulo: "Aleación de ley",
        imagen: "img/Libros/aleacion de ley.avif",
        autor:" Brandon Sanderson",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                }
    
            ]
    },
    {
        id: "Libro-04",
        titulo: "Alicia en el país de las maravillas",
        imagen: "img/Libros/alicia en el pais de las maravillas.avif",
        autor:"Lewis Carroll",
            categorias: 
            [
                {
                    nombre: "Infantil",
                    id: "infantil"
                }
            ]
    },
    
    
    {
        id: "Libro-05",
        titulo: "Brazales de duelo",
        imagen: "img/Libros/brazales de duelo.avif",
        autor:"Brandon Sanderson",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                }
            ]
    },
    {
        id: "Libro-06",
        titulo: "Casa de muñecas",
        imagen: "img/Libros/Casademuñecas.avif",
        autor:"Henrik Ibsen",
            categorias: 
            [
                {
                    nombre: "Drama",
                    id: "drama"
                }
            ]
    },
    {
        id: "Libro-07",
        titulo: "Catch the wind",
        imagen: "img/Libros/catch the wind.avif",
        autor:"Jon Midget",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Popular",
                    id: "popular" 
                }
            ]
    },
    {
        id: "Libro-08",
        titulo: "Cinder",
        imagen: "img/Libros/ciner.avif",
        autor:"Jon Midget",
            categorias: 
            [
                {
                    nombre: "Ciencia ficcion",
                    id: "ciencia ficcion"
                }
            ]
    },
    {
        id: "Libro-09",
        titulo: "Citonica",
        imagen: "img/Libros/citonica.avif",
        autor:"Brandon Sanderson",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Nuevo",
                    id: "nuevo"
                }
            ]
    },
    {
        id: "Libro-10",
        titulo: "Ciudad medialuna",
        imagen: "img/Libros/ciudad-medialuna.avif",
        autor:"Sarah J.Maas",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Romance",
                    id: "romance"
                },
                {
                    nombre: "Popular",
                    id: "popular"
                }
            ]
    },
    
    {
        id: "Libro-12",
        titulo: "Divergente",
        imagen: "img/Libros/divergente.avif",
        autor:"Veronica Roth",
            categorias: 
            [
                {
                    nombre: "Ciencia ficcion",
                    id: "ciencia ficcion"
                }
            ]
    },
    {
        id: "Libro-12",
        titulo: "El amor, las mujeres y la vida",
        imagen: "img/Libros/el amor, las mujeres y la vida.avif",
        autor:"Mario Benedetti",
            categorias: 
            [
                {
                    nombre: "Poesia",
                    id: "poesia"
                },
                {
                    nombre: "Romance",
                    id: "romance"
                }
            ]
    },
    {
        id: "Libro-13",
        titulo: "El asesinato de Sócrates",
        imagen: "img/Libros/el asesinato de socrates.jfif",
        autor:"Marcos Chicot",
            categorias: 
            [
                {
                    nombre: "Historia",
                    id: "historia"
                },
                {
                    nombre: "Drama",
                    id: "drama"
                }
            ]
    },
    {
        id: "Libro-14",
        titulo: "El ejército de la reina",
        imagen: "img/Libros/el ejercito del la reina.avif",
        autor:"Marissa Meyer",
            categorias: 
            [
                {
                    nombre: "Ciencia ficcion",
                    id: "ciencia ficcion"
                }
            ]
    },
    {
        id: "Libro-15",
        titulo: "El hereje",
        imagen: "img/Libros/el hereje.jfif",
        autor:"Carlo A. Martigli",
            categorias: 
            [
                {
                    nombre: "Historia",
                    id: "historia"
                }
            ]
    },
    {
        id: "Libro-16",
        titulo: "El libro de la selva",
        imagen: "img/Libros/el libro de la selva.avif",
        autor:"Geronimo Stilton",
            categorias: 
            [
                {
                    nombre: "Infantil",
                    id: "infantil"
                }
            ]
    },
    {
        id: "Libro-17",
        titulo: "El principito",
        imagen: "img/Libros/el principito.avif",
        autor:"Antoine de Saint-Exupéry",
            categorias: 
            [
                {
                    nombre: "Infantil",
                    id: "infantil"
                }
            ]
    },
    {
        id: "Libro-18",
        titulo: "El visitante",
        imagen: "img/Libros/el visitante.avif",
        autor:"Stephen King",
            categorias: 
            [
                {
                    nombre: "Misterio",
                    id: "misterio"
                }
            ]
    },
    {
        id: "Libro-19",
        titulo: "El hijo olvidado",
        imagen: "img/Libros/el-hijo-olvidado.avif",
        autor:"Mikel Santiago",
            categorias: 
            [
                {
                    nombre: "Misterio",
                    id: "misterio"
                },
                {
                    nombre: "Nuevo",
                    id: "nuevo"
                }
            ]
    },
    {
        id: "Libro-20",
        titulo: "Fairest",
        imagen: "img/Libros/fairest.avif",
        autor:"Marissa Meyer",
            categorias: 
            [
                {
                    nombre: "Ciencia ficcion",
                    id: "ciencia ficcion"
                }
            ]
    },
    {
        id: "Libro-21",
        titulo: "Fuego y sangre",
        imagen: "img/Libros/fuego y sangre.avif",
        autor:"George R. R. Martin",
            categorias: 
            [
                {
                    nombre: "Fantasia",
                    id: "fantasia"
                },
                {
                    nombre: "Popular",
                    id: "popular"
                },

            ]
    },
    {
        id: "Libro-22",
        titulo: "Grounded for All Eternity",
        imagen: "img/Libros/groundedforalleternity.avif",
        autor:"Darcy Marks",
            categorias: 
            [
                {
                    nombre: "Misterio",
                    id: "misterio"
                },
                {
                    nombre: "Popular",
                    id: "popular"
                },
                {
                    nombre: "Nuevo",
                    id: "nuevo"
                }

            ]
    },
    {
        id: "Libro-23",
        titulo: "It",
        imagen: "img/Libros/it.avif",
        autor:"Stephen King",
            categorias: 
            [
                {
                    nombre: "Misterio",
                    id: "misterio"
                }
                
            ]
    },
    {
        id: "Libro-24",
        titulo: "Jaque mate al amor",
        imagen: "img/Libros/jaque mate al amor.avif",
        autor:"Ali Hazelwood",
            categorias: 
            [
                {
                    nombre: "Romance",
                    id: "romance"
                }
                
            ]
    },
    {
        id: "Libro-25",
        titulo: "La catedral del mar",
        imagen: "img/Libros/la catedral del mar.jfif",
        autor:"Ildefonso Falcones",
            categorias: 
            [
                {
                    nombre: "Historia",
                    id: "historia"
                }
                
            ]
    },
    {
        id: "Libro-26",
        titulo: "La columna de hierro",
        imagen: "img/Libros/la columna de hierro.jfif",
        autor:"Taylor Caldwell",
            categorias: 
            [
                {
                    nombre: "Historia",
                    id: "historia"
                }
                
            ]
    },
    {
        id: "Libro-27",
        titulo: "La pareja de al lado",
        imagen: "img/Libros/la pareja de al lado.avif",
        autor:"Shari Lapena",
            categorias: 
            [
                {
                    nombre: "Misterio",
                    id: "misterio"
                }
                
            ]
    },
    {
        id: "Libro-28",
        titulo: "La química del amor",
        imagen: "img/Libros/la quimica del amor.avif",
        autor:"Ali Hazelwood",
            categorias: 
            [
                {
                    nombre: "Romance",
                    id: "romance"
                }
                
            ]
    },
    
     {
        id: "Libro-30",
        titulo: "La paciente silenciosa",
        imagen: "img/Libros/la-paciente-silenciosa.avif",
        autor:"Alex Michaelides",
            categorias: 
            [
                {
                    nombre:"Misterio",
                    id: "misterio"
                },
                {
                    nombre:"Popular",
                    id: "popular"
                },
                
                
            ]
    },

    {
        id: "Libro-31",
        titulo: "La campana de cristal",
        imagen: "img/Libros/Lacampanadecristal.avif",
        autor:"Sylvia Plath",
            categorias: 
            [
                {
                    nombre:"Drama",
                    id: "drama"
                } 
            ]
    },
    {
        id: "Libro-32",
        titulo: "La gaviota",
        imagen: "img/Libros/Lagaviota.avif",
        autor:"Antón Chéjov",
            categorias: 
            [
                {
                    nombre:"Drama",
                    id: "drama"
                } 
            ]
    },
    {
        id: "Libro-32",
        titulo: "Los juegos del hambre",
        imagen: "img/Libros/los juegos del hambre.avif",
        autor:"Suzanne Collins",
            categorias: 
            [
                {
                    nombre:"Ciencia ficcion",
                    id: "ciencia ficcion"
                },
                {
                    nombre:"Popular",
                    id: "popular"
                }
            ]
    },
    {
        id: "Libro-33",
        titulo: "Los pilares de la tierra",
        imagen: "img/Libros/los pilares de la tierra.jfif",
        autor:"Ken Follett",
            categorias: 
            [
                {
                    nombre:"Historia",
                    id: "historia"
                } 
            ]
    },
    {
        id: "Libro-34",
        titulo: "Los viajes de gulliver",
        imagen: "img/Libros/los viajes de gulliver.avif",
        autor:"Jonathan Swift",
            categorias: 
            [
                {
                    nombre:"Infantil",
                    id: "infantil"
                } 
            ]
    },
 
    {
        id: "Libro-35",
        titulo: "Matilda",
        imagen: "img/Libros/matilda.avif",
        autor:" Roald Dahl",
            categorias: 
            [
                {
                    nombre:"Infantil",
                    id: "infantil"
                } 
            ]
    },
    {
        id: "Libro-36",
        titulo: "Muerte de un viajante",
        imagen: "img/Libros/Muertedeunviajante.avif",
        autor:"Arthur Miller",
            categorias: 
            [
                {
                    nombre:"Drama",
                    id: "drama"
                } 
            ]
    },
    {
        id: "Libro-37",
        titulo: "Poseía",
        imagen: "img/Libros/poesia.avif",
        autor:"Luis de Góngora y Argote",
            categorias: 
            [
                {
                    nombre: "Poesia",
                    id: "poesia"
                }
                
            ]
    },

    {
        id: "Libro-38",
        titulo: "Rimas y leyendas",
        imagen: "img/Libros/rimas y leyendas.avif",
        autor:"Gustavo Adolfo Bécquer",
            categorias: 
            [
                {
                    nombre: "Poesia",
                    id: "poesia"
                }
                
            ]
    },
    {
        id: "Libro-39",
        titulo: "Rivales divinos",
        imagen: "img/Libros/rivales-divinos.avif",
        autor:"Rebecca Ross",
            categorias: 
            [
                {
                    nombre: "Romance",
                    id: "romance"
                },
                {
                    nombre: "Nuevo",
                    id: "nuevo"
                }
                
            ]
    },
    {
        id: "Libro-40",
        titulo: "Roma soy yo",
        imagen: "img/Libros/roma soy yo.jfif",
        autor:"Santiago Posteguillo",
            categorias: 
            [
                {
                    nombre: "Historia",
                    id: "historia"
                },
                
                
            ]
    },
    {
        id: "Libro-41",
        titulo: "Romper el hielo",
        imagen: "img/Libros/romper-el-hielo.avif",
        autor:"Hannah Grace",
            categorias: 
            [
                {
                    nombre: "Romance",
                    id: "romance"
                },
                {
                    nombre: "Popular",
                    id: "popular"
                }
                
            ]
    },
    {
        id: "Libro-42",
        titulo: "Tan poca vida",
        imagen: "img/Libros/tan-poca-vida.avif",
        autor:"Hanya Yanagihara",
            categorias: 
            [
                {
                    nombre: "Drama",
                    id: "drama"
                },
                {
                    nombre: "Popular",
                    id: "popular"
                }
                
            ]
    },
    {
        id: "Libro-43",
        titulo: "Un mundo sin fin",
        imagen: "img/Libros/un mundo sin fin.jfif",
        autor:"Ken Follett",
            categorias: 
            [
                {
                    nombre: "Drama",
                    id: "drama"
                },
                
            ]
    },
    

];

// Selección de elementos del DOM
const tituloPrincipal = document.querySelector("#titulo-principal")
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const contenedorlibros = document.querySelector("#contenedor-libros");
let botonesAgregar = document.querySelectorAll(".libro-agregar");
const numerito = document.querySelector("#numerito");

// Función para cargar libros en el contenedor
function cargarlibros(libroselegidos){

    contenedorlibros.innerHTML = ""
    // Itera sobre cada libro seleccionado y crea un nuevo elemento de libro en el DOM
    libroselegidos.forEach(libro =>{
    const div = document.createElement('div');
    div.classList.add('libro');
    div.innerHTML = `

    <img class="libro-imagen" src="${libro.imagen}" alt="${libro.titulo}">
                <div class="libro-detalles">
                    <h3 class="libro-titulo">${libro.titulo}</h3>
                    <button class="libro-agregar" id="${libro.id}"  >Agregar a tu lista</button>
                </div>
    `;


        contenedorlibros.append(div);
    })

    actualizarBotonesAgregar();

}

cargarlibros(libros);



botonesCategorias.forEach( boton =>{
boton.addEventListener("click", (e) =>{

    botonesCategorias.forEach(b => b.classList.remove("active"));

    e.currentTarget.classList.add("active");

    // Obtiene el ID de la categoría seleccionada
    const categoriaId = e.currentTarget.id;

    // Filtra los libros según la categoría seleccionada
    if (categoriaId !== "todos") {
        const librosCategoria = libros.filter(libro => {
            return libro.categorias.some(cat => cat.id === categoriaId);
        });

        const nombreCategoria = librosCategoria.length > 0 ? librosCategoria[0].categorias.find(cat => cat.id === categoriaId).nombre : "";
        tituloPrincipal.innerText = nombreCategoria;
        // Carga los libros filtrados por categoría en el contenedor
        cargarlibros(librosCategoria);
    } else {
        // Si se selecciona "todos", muestra todos los libros y actualiza el título principal
        tituloPrincipal.innerText = "Catálogo";
        cargarlibros(libros);}

    }

)
});

// para actualizar agregar
function actualizarBotonesAgregar(){
    
    botonesAgregar = document.querySelectorAll(".libro-agregar");

    botonesAgregar.forEach(boton => boton.addEventListener("click",agregaralalista));
    
}
// Variables para almacenar los libros en la lista y obtenerlos del localStorage si existen
let librosdetulista;
let librosdetulistaLS =localStorage.getItem("libros-en-lista");

// Si hay libros guardados en localStorage, los carga; de lo contrario, inicializa un arreglo vacío
if(librosdetulistaLS){
    librosdetulista =JSON.parse(librosdetulistaLS);
    actualizarNumerito(); 
}
else{
    librosdetulista = [];
}

// Función para agregar un libro a la lista
function agregaralalista(e){


    const idBoton = e.currentTarget.id;
    const  libroAgregado =libros.find(libro => libro.id === idBoton);

    // Verifica si el libro ya está en la lista
    if(librosdetulista.some(libro => libro.id === idBoton)){

        Swal.fire({
            icon: 'info', 
            text:"El libro se encuentra en tu lista",
            width: 350,
            padding: "1em",
            color: "#fff",
            background: "#849c80",
            });
        
    }
    else{
        // Si el libro no está en la lista, lo agrega
        libroAgregado.cantidad = 1;
        librosdetulista.push(libroAgregado);
    }


    // Actualiza el contador de libros en la lista y guarda en localStorage
    actualizarNumerito();
    localStorage.setItem("libros-en-lista",JSON.stringify(librosdetulista));

}
// Función para actualizar el contador numérico de libros en la lista
function actualizarNumerito(){
    let nuevonumerito = librosdetulista.reduce((acc,libro)=> acc + libro.cantidad,0 );
    numerito.innerHTML = nuevonumerito;
}
