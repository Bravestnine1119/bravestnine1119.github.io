'use strict';

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

// Función para actualizar el carrusel
function actualizarCarrusel(posicion) {
    let operacion = posicion * -(100 / 6);
    grande.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove('activo');
    });
    punto[posicion].classList.add('activo');
}

// Inicializar el carrusel en el primer punto
actualizarCarrusel(0);

// Añadir evento de clic a cada punto
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        actualizarCarrusel(i);
    });
});
