// Variable para almacenar el índice

//En "slideIndex" se almacena cual es la foto actual del carruzel, inicia en 1
let slideIndex = 1;
showSlides(slideIndex)

//La funcion "plusSlides" sirve para establecer un cambio de foto 
function plusSlides(n){
    showSlides(slideIndex += n);
}

//La funcion "currentSlide" sirve para establecer cual es la foto actual 
function currentSlide (n){
    showSlides(slideIndex = n);
}

function showSlides(n){
let i;
 let slides = document.getElementsByClassName('myslides');
let quadrates = document.getElementsByClassName('quadrate');
 
    // Si el índice es mayor que la cantidad de slides, volvemos al primer slide
    if(n>slides.length){
        slideIndex = 1;
    }
    // Si el índice es menor que 1, vamos al último slide
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i<slides.length;i++){
        slides[i].style.display ='none';
    }
    //muestra imagen actual
    for(i=0;i<quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace(' active','');
    }
    slides[slideIndex-1].style.display ='block';
    quadrates[slideIndex-1].className += ' active';

    
}