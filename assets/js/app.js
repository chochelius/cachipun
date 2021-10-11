let turnos = "";
let usermovida = "";
//codigo del cachipun
function cachipun() {
  let turnos = parseInt(prompt("Ingresa cuantas veces quieres jugar"));
  let resultado1 = prompt("Elije piedra, papel, or tijeras");
  let resultado2 = Math.random();
  if (resultado2 < 0.34) {
    resultado2 = "piedra";
  } else if (resultado2 <= 0.67) {
    resultado2 = "papel";
  } else {
    resultado2 = "tijeras";
  }

  movida1 = resultado1;
  movida2 = resultado2;

    for (var i = 0; i < turnos; i++) {
    function compare(movida1, movida2) {
      if (movida1 == movida2) {
        return "Es un empate";
      }
      if (movida1 == "piedra") {
        if (movida2 == "tijeras") {
          return "¡Ganaste!";
        } else {
          return "Gana la máquina";
        }
      }
      if (movida1 == "papel") {
        if (movida2 == "piedra") {
          return "¡Ganaste!";
        } else {
          return "Gana la máquina";
        }
      }
      if (movida1 == "tijeras") {
        if (movida2 == "piedra") {
          return "Gana la máquina";
        } else {
          return "¡Ganaste!";
        }
      }
    }
    document.write(`${compare(movida1, movida2)}`);
  }

  document.write("<br>");
}
//pude hacer que funcione pero solo pide una vez el 