//= 0 piedra, 1 papel, 2 tijera

let eleccionUsuario;
let eleccionMaquina = Math.floor(Math.random()*3);
console.log(eleccionMaquina)

//Se captura la elección del usuario
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        eleccionUsuario = parseInt(this.getAttribute('data-value'));
        //Una vez capturada la elección del usuario, mostramos al ganador
        determinarGanador(eleccionUsuario, eleccionMaquina);
    });
});

//Función que determina al ganador del juego
function determinarGanador (eleccionUsuario, eleccionMaquina){
    if (eleccionUsuario == 0 && eleccionMaquina == 1) {
        alert("Gana la máquina");
    } else if (eleccionUsuario == 0 && eleccionMaquina == 2) {
        alert("Gana el usuario");
    } else if (eleccionUsuario == 1 && eleccionMaquina == 2) {
        alert("Gana la máquina");
    } else if (eleccionUsuario == 2 && eleccionMaquina == 1) {
        alert("Gana el usuario");
    } else {
        alert("Es un empate");
    }
}




