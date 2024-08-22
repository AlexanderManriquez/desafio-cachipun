// = 0 piedra, 1 papel, 2 tijera
let cantidadDeJuegos;
let juegosRestantes;
let eleccionUsuario;
let eleccionMaquina;
let victoriasUsuario = 0;  // Contador de victorias del usuario
let victoriasMaquina = 0;  // Contador de victorias de la máquina
let modal = document.getElementById("rules__modal");
let btn = document.getElementById("rules__button");
let span = document.getElementsByClassName("close")[0];

//Función para mostrar los botones de las opciones del juego
function startGame() {
    cantidadDeJuegos = parseInt(document.getElementById("selection").value);
    juegosRestantes = cantidadDeJuegos; // Inicializar el contador de juegos restantes
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("results").style.visibility = "visible";
    document.querySelector(".start").disabled = true;
}

//Se captura la elección del usuario mientras queden juegos restantes
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
        if (juegosRestantes > 0) {
            eleccionUsuario = parseInt(this.getAttribute('data-value'));
            jugar();
        } 
    });
});

// Funcion para que se desarrolle el juego, incluye la generacion de la eleccion de la maquina, mostrar las selecciones de los jugadores,
// disminuir el contador de juegos restantes, y actualizar la cuenta
function jugar() {
    eleccionMaquina = Math.floor(Math.random() * 3);
    mostrarElecciones(eleccionUsuario, eleccionMaquina);
    determinarGanador(eleccionUsuario, eleccionMaquina);
    juegosRestantes--;
    actualizarCuenta();

    // Verifica si la partida ha terminado
    if (juegosRestantes === 0) {
        finalizarPartida();
    }
}

// Función para convertir las elecciones a texto
function convertirEleccionATexto(eleccion) {
    if (eleccion === 0) return "Piedra";
    if (eleccion === 1) return "Papel";
    if (eleccion === 2) return "Tijera";
}

// Función para mostrar las elecciones del usuario y la máquina
function mostrarElecciones(eleccionUsuario, eleccionMaquina) {
    document.getElementById("user__result").textContent = "Elección del usuario: " + convertirEleccionATexto(eleccionUsuario);
    document.getElementById("machine__result").textContent = "Elección de la máquina: " + convertirEleccionATexto(eleccionMaquina);
}

//Función que determina al ganador del juego
function determinarGanador(eleccionUsuario, eleccionMaquina) {
    let resultado;
    if (eleccionUsuario == 0 && eleccionMaquina == 1) {
        resultado = "Gana la máquina";
        victoriasMaquina++;
    } else if (eleccionUsuario == 1 && eleccionMaquina == 0) {
        resultado = "Gana el usuario";
        victoriasUsuario++;
    } else if (eleccionUsuario == 0 && eleccionMaquina == 2) {
        resultado = "Gana el usuario";
        victoriasUsuario++;
    } else if (eleccionUsuario == 2 && eleccionMaquina == 0) {
        resultado = "Gana la máquina";
        victoriasMaquina++;
    } else if (eleccionUsuario == 1 && eleccionMaquina == 2) {
        resultado = "Gana la máquina";
        victoriasMaquina++;
    } else if (eleccionUsuario == 2 && eleccionMaquina == 1) {
        resultado = "Gana el usuario";
        victoriasUsuario++;
    } else {
        resultado = "Es un empate";
    }
}

// Función para actualizar la cuenta de victorias
function actualizarCuenta() {
    document.getElementById("total__result").textContent =
        "La cuenta va: Usuario: " + victoriasUsuario + " - Máquina: " + victoriasMaquina;
}

// Función para finalizar la partida y mostrar un mensaje final
function finalizarPartida() {
    let mensajeFinal;
    if (victoriasUsuario > victoriasMaquina) {
        mensajeFinal = "¡Felicidades, ganaste la partida!";
    } else if (victoriasUsuario < victoriasMaquina) {
        mensajeFinal = "La máquina ganó la partida. ¡Intenta de nuevo!";
    } else {
        mensajeFinal = "La partida terminó en empate.";
    }
    document.getElementById("final__message").textContent = mensajeFinal;
    document.getElementById("buttons").style.visibility = "hidden"; // Ocultar botones de opciones
    document.getElementById("reset__button").style.visibility = "visible"; // Mostrar botón de reinicio
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar todas las variables y contadores
    victoriasUsuario = 0;
    victoriasMaquina = 0;
    document.getElementById("user__result").textContent = "Elección del usuario: -";
    document.getElementById("machine__result").textContent = "Elección de la máquina: -";
    document.getElementById("total__result").textContent = "La cuenta va: Usuario: 0 - Máquina: 0";
    document.getElementById("final__message").textContent = "";
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("reset__button").style.visibility = "hidden";
    document.querySelector(".start").disabled = false;
}


//Funciones para mostrar el modal con las reglas del juego
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}