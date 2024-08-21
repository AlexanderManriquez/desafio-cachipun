// = 0 piedra, 1 papel, 2 tijera
//***Pendientes: Agregar reglas a través de un modal(?); mostrar mensaje de felicitacion si el usuario gana, 
//agregar botón de reinicio, agregar nombre al usuario (?) */
let cantidadDeJuegos;
let juegosRestantes;
let eleccionUsuario;
let eleccionMaquina;
let victoriasUsuario = 0;  // Contador de victorias del usuario
let victoriasMaquina = 0;  // Contador de victorias de la máquina

//Función para mostrar los botones de las opciones del juego
function startGame() {
    cantidadDeJuegos = parseInt(document.getElementById("selection").value);
    juegosRestantes = cantidadDeJuegos; // Inicializar el contador de juegos restantes
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("results").style.visibility = "visible";
}

//Se captura la elección del usuario mientras queden juegos restantes
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        if (juegosRestantes > 0) {
            eleccionUsuario = parseInt(this.getAttribute('data-value'));
            jugar();
        } else {
            alert("El juego ha terminado.");
            document.getElementById("buttons").style.visibility = "hidden";
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