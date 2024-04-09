// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


 // Obtener elementos HTML
let paisDiv = document.getElementById("country_div");
let telefonoDiv = document.getElementById("telephone_div");
let div = document.getElementById("div");

// Función para cambiar las clases basadas en el ancho de la pantalla
function cambiarClasesSegunAnchoPantalla() {
    if (window.innerWidth <= 768) {
        // Si el ancho de la pantalla es menor o igual a 600px
        // Eliminar las clases existentes
        paisDiv.classList.remove("col-6", "col-md-4");
        telefonoDiv.classList.remove("col-md-8");
        div.classList.remove("row");
        
        // Agregar nuevas clases
        paisDiv.classList.add("row");
        telefonoDiv.classList.add("row");
        div.classList.add("col");
    } else {
        // Si el ancho de la pantalla es mayor a 600px
        // Restaurar las clases originales
        paisDiv.classList.remove("row");
        telefonoDiv.classList.remove("row");
        div.classList.remove("col");

        paisDiv.classList.add("col-6", "col-md-4");
        telefonoDiv.classList.add("col-md-8");
        div.classList.add("row");
    }
}

// Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
cambiarClasesSegunAnchoPantalla();
window.addEventListener("resize", cambiarClasesSegunAnchoPantalla);

// ===================================
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('dark-mode-toggle');
  var container = document.querySelector('.contenedor');
  var body = document.body; // Obtener el body

  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          container.classList.add('dark-mode');
          body.style.backgroundColor = 'grey'; // Cambiar el color del body a gris
      } else {
          container.classList.remove('dark-mode');
          body.style.backgroundColor = ''; // Restaurar el color de fondo predeterminado del body
      }
  });
});
