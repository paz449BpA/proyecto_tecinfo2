const carruselContenedor = document.querySelector('.carrusel-contenedor');
const carruselTrack = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const botonAnterior = document.querySelector('.anterior');
const botonSiguiente = document.querySelector('.siguiente');
const indicadores = document.querySelector('.indicadores');
const puntos = document.querySelectorAll('.indicadores li');

let indiceActual = 0;
const anchoImagen = imagenes[0].clientWidth;

function actualizarCarrusel() {
    carruselTrack.style.transform = `translateX(-${indiceActual * anchoImagen}px)`;
    actualizarIndicadores();
}

function actualizarIndicadores() {
    puntos.forEach((punto, indice) => {
        punto.classList.toggle('activo', indice === indiceActual);
    });
}

function siguienteImagen() {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0; // Volver a la primera imagen
    }
    actualizarCarrusel();
}

function anteriorImagen() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = imagenes.length - 1; // Ir a la última imagen
    }
    actualizarCarrusel();
}

function navegarAImagen(indice) {
    indiceActual = indice;
    actualizarCarrusel();
}

botonSiguiente.addEventListener('click', siguienteImagen);
botonAnterior.addEventListener('click', anteriorImagen);

indicadores.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const indice = parseInt(e.target.dataset.indice);
        navegarAImagen(indice);
    }
});

// Asegurar que el ancho de la imagen se recalcule en caso de redimensionamiento de la ventana
window.addEventListener('resize', () => {
    anchoImagen = imagenes[0].clientWidth;
    actualizarCarrusel();
});

// Iniciar el carrusel
actualizarCarrusel();
