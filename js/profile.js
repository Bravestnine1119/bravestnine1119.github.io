// Obtener los parámetros de la consulta de la URL
const urlParams = new URLSearchParams(window.location.search);



// Obtener los valores de los parámetros
const username = urlParams.get('username');
const xp = urlParams.get('xp');
const email = urlParams.get('email');
const credits = urlParams.get('credits');
const firstname = urlParams.get('firstname');
const lastname = urlParams.get('lastname');
const pfpUrl = urlParams.get('pfp_url');

console.log(`firstname: ${firstname}\nlastname: ${lastname}\nxp: ${xp}\ncredits: ${credits}\npfp_url: ${pfpUrl}`)

// Obtener el div con la clase "img"
const imgDiv = document.querySelector('.img');

// Establecer la propiedad background-image del div con la URL obtenida del servidor
imgDiv.style.backgroundImage = `url(${pfpUrl})`;

function logout() {
    // Limpiar el almacenamiento local (localStorage)
    localStorage.clear();
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "login.html";
}

// Agregar el evento click al enlace de logout
document.getElementById('logout_link').addEventListener('click', logout);

// Utilizar los datos en tu página
// document.getElementById('username').innerText = username;
// document.getElementById('xp').innerText = xp;
// document.getElementById('email').innerText = email;
// document.getElementById('credits').innerText = credits;
// document.getElementById('firstname').innerText = firstname;
// document.getElementById('lastname').innerText = lastname;
// document.getElementById('pfpUrl').src = pfpUrl;
