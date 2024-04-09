// Selección del checkbox
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Escuchar cambios en el checkbox
darkModeToggle.addEventListener('change', function() {
    // Obtener el cuerpo del documento
    const body = document.body;
    console.log("Pan con queso");
    // Aplicar o quitar la clase 'dark-filter' en función del estado del checkbox
    if (darkModeToggle.checked) {
        body.classList.add('dark-filter');
    } else {
        body.classList.remove('dark-filter');
    }
});
