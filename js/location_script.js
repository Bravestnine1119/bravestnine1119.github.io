// Función para cargar el contenido del archivo JSON y actualizar los elementos HTML
function cargarContenido(idioma) {
    fetch('../json/language.json')
        .then(response => response.json())
        .then(data => {
            // Verificar el idioma y actualizar el contenido correspondiente
            if (idioma === 'en') {
                document.getElementById('title').textContent = data.en.title;
                document.getElementById('description').textContent = data.en.description;
                document.getElementById('instruction').textContent = data.en.instruction;
                document.getElementById('price').textContent = data.en.price;
            } else if (idioma === 'es') {
                document.getElementById('title').textContent = data.es.title;
                document.getElementById('description').textContent = data.es.description;
                document.getElementById('instruction').textContent = data.es.instruction;
                document.getElementById('price').textContent = data.es.price;
            } else if (idioma === 'de') {
                document.getElementById('title').textContent = data.de.title;
                document.getElementById('description').textContent = data.de.description;
                document.getElementById('instruction').textContent = data.de.instruction;
                document.getElementById('price').textContent = data.de.price;
            } else if (idioma === 'fr') {
                document.getElementById('title').textContent = data.fr.title;
                document.getElementById('description').textContent = data.fr.description;
                document.getElementById('instruction').textContent = data.fr.instruction;
                document.getElementById('price').textContent = data.fr.price;
            }else if (idioma === 'it') {
                document.getElementById('title').textContent = data.it.title;
                document.getElementById('description').textContent = data.it.description;
                document.getElementById('instruction').textContent = data.it.instruction;
                document.getElementById('price').textContent = data.it.price;
              } 




        })
        .catch(error => console.error('Error al leer el archivo JSON:', error));
}

// Event listener para el botón de inglés
document.getElementById('en').addEventListener('click', function () {
    cargarContenido('en');
});

// Event listener para el botón de español
document.getElementById('es').addEventListener('click', function () {
    cargarContenido('es');
});

document.getElementById('de').addEventListener('click', function () {
    cargarContenido('de');
});

document.getElementById('fr').addEventListener('click', function () {
    cargarContenido('fr');
});

document.getElementById('it').addEventListener('click', function () {
    cargarContenido('it');
});

