//Variables
let numeroLimite = 100; // Valor por defecto
numeroLimite = parseFloat(prompt("¡Hola! Vamos a jugar a adivinar un número. Dame un número límite para el juego, puede ser 10, 100, 1000, etc."));
let maximoIntentos = 3; // Valor por defecto
maximoIntentos = parseFloat(prompt("Dame un número máximo de intentos:"));
let jugarDeNuevo = true; // Variable para controlar si se quiere jugar de nuevo

while (jugarDeNuevo) {

    let numeroUsuario = 0; // Inicializamos el número del usuario a 0
    let intentos = 1;
    let numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1; // Genera un número entre 1 y el límite
    while (numeroUsuario != numeroSecreto) {
        //Solicitamos el número al usuario
        numeroUsuario = prompt(`Escoge un número entre 1 y ${numeroLimite}:`);

        if (numeroUsuario == numeroSecreto) {
            //Acertamos, fue verdadera la condición
            alert(`¡Acertaste!, el número secreto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert(`El número secreto es menor que ${numeroUsuario}`);
            } else {
                alert(`El número secreto es mayor que ${numeroUsuario}`);
            }
            //Incrementamos el contador cuando no acierta
            intentos++;

            if (intentos > maximoIntentos) {
                alert(`Lo siento, el número secreto era ${numeroSecreto} y superaste el límite de ${maximoIntentos} intentos.`);
                break; // Salimos del bucle si se superan los intentos
            }
        }
    }
    // Preguntamos si quiere jugar de nuevo
    jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
    if (!jugarDeNuevo) {
        alert("¡Gracias por jugar!");
    }
}