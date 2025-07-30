let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.textContent = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Felicidades! Has acertado el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("reiniciar").disabled = false;
  } else {
    // El usuario no acertó el número secreto
    asignarTextoElemento(
      "p",
      numeroDeUsuario > numeroSecreto
        ? "El número secreto es menor que " + numeroDeUsuario
        : "El número secreto es mayor que " + numeroDeUsuario
    );
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").disabled = true;
}

condicionesIniciales();
