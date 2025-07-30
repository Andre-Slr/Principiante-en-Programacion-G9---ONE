let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; // Número máximo permitido

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
    finDelJuego();
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
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;

  // verificar si ya sorteamos todos los números
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento(
      "p",
      "Todos los números han sido sorteados. Reinicia el juego."
    );
    finDelJuego();
    return;
  } else {
    // Verificar si el número ya ha sido sorteado
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      // Si ya fue sorteado, generar otro número
      return generarNumeroSecreto();
    } else {
      // Si no fue sorteado, agregarlo a la lista y devolverlo
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function finDelJuego() {
  document.getElementById("reiniciar").disabled = false;
  document.getElementById("valorUsuario").disabled = true;
  document.getElementById("intentar").disabled = true;
}

function condicionesIniciales() {
  document.getElementById("valorUsuario").disabled = false;
  document.getElementById("intentar").disabled = false;
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Adivina el número del 1 al ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").disabled = true;
}

condicionesIniciales();
