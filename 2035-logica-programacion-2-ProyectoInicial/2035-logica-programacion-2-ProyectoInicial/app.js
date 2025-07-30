let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.textContent = texto;
}

function intentoDeUsuario() {
  alert("¡Función de intento de usuario llamada!");
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");
