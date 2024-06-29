//variable de alcance global
let numSecreto;
let intentos;
let listaNumerosSorteados = [];
let numMax = 10;

function asignatTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return; //no es necesario aquí
}

function verificarIntento() {
  let numUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numSecreto === numUsuario) {
    asignatTextoElemento(
      ".texto__parrafo",
      `¡Acertaste el número en ${intentos} ${
        intentos == 1 ? "Intento!" : "Intentos!"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //no acerto
    intentos++;
    limpiarInput();
    if (numUsuario < numSecreto) {
      asignatTextoElemento(".texto__parrafo", "El número secreto es mayor");
    } else {
      asignatTextoElemento(".texto__parrafo", "El número secreto es menor");
    }
  }

  return; //aqui tampoco es necesario
}

function limpiarInput() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumSecreto() {
  // let num secreto variable de ambito/alcance de bloque
  let numGenerado = Math.floor(Math.random() * numMax) + 1; // floor no aproxima, solo quita los decimales

  console.log(numGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los nums
  if (listaNumerosSorteados.length == numMax) {
    asignatTextoElemento(
      ".texto__parrafo",
      "Ya se usaron todos los números posibles"
    );
  } else {
    if (listaNumerosSorteados.includes(numGenerado)) {
      // si el numero generado esta incluido en la lista
      return generarNumSecreto(); // recursividad, vuelve a la función, para intentar obtener otro num
    } else {
      listaNumerosSorteados.push(numGenerado);
      return numGenerado;
    }
  }
}
function condicionesIniciales() {
  asignatTextoElemento("h1", "Juego del número secreto");
  asignatTextoElemento(".texto__parrafo", `Indica un número del 1-${numMax}`);
  numSecreto = generarNumSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarInput();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número de intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
