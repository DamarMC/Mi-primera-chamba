// Mostrar saludo dinámico
const saludo = document.getElementById("saludo");
const hora = new Date().getHours();

if (hora < 12) {
  saludo.textContent = "¡Buenos días soy Damar, bienvenido a mi página!";
} else if (hora < 18) {
  saludo.textContent = "¡Buenas tardes, gracias por visitar!";
} else {
  saludo.textContent = "¡Buenas noches, espero que estés bien!";
function mostrarMensaje() {
  saludo.classList.add('fade-out');

  setTimeout(() => {
    alert("¡Hola! Soy Damar Steven, gracias por visitar mi sitio web 😄");
    saludo.classList.remove('fade-out');
  }, 500);
}

const fechaP = document.getElementById('fecha');
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaActual = new Date().toLocaleDateString('es-ES', opcionesFecha);

fechaP.textContent = `Hoy es ${fechaActual}`;

}

// Cambio de tema claro/oscuro
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
