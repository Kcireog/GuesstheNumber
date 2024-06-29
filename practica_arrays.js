// 1.Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];

// 2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los
// siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y
// 'GoLang'.
// lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// 4.Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion.
// function mostrarLenguagesDeProgramacion() {
//   console.log(lenguagesDeProgramacion);
//   //   for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//   //     console.log(lenguagesDeProgramacion[i]);
//   //   }
// }
// mostrarLenguagesDeProgramacion();

// 5.Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.
// function mostrarLenguagesDeProgramacionInverso() {
//   let resultado = "";
//   for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
//     resultado += lenguagesDeProgramacion[i];
//     if (i > 0) {
//       resultado += ", ";
//     }
//   }
//   console.log(resultado);
// }
// mostrarLenguagesDeProgramacionInverso();

// 6.Crea una función que calcule el promedio de los elementos en una lista de números.
// let listaNumeros = [1, 2, 3];
// function calcularPromedio(listaNumeros) {
//   let suma = 0;
//   for (let i = 0; i < listaNumeros.length; i++) {
//     suma += listaNumeros[i];
//   }
//   return suma / listaNumeros.length;
// }
// console.log(calcularPromedio(listaNumeros));
// 7.Crea una función que muestre en la consola el número más grande y el número más pequeño
// en una lista.
// let listaMayorMenor = [0, 2, 1, 4, 55];
// function numMayorMenor(listaMayorMenor) {
//   let menor = listaMayorMenor[0];
//   let mayor = listaMayorMenor[0];
//   for (let i = 0; i < listaMayorMenor.length; i++) {
//     if (listaMayorMenor[i] < menor) {
//       menor = listaMayorMenor[i];
//     }
//     if (listaMayorMenor[i] > mayor) {
//       mayor = listaMayorMenor[i];
//     }
//   }
//   console.log(menor, mayor);
// }
// numMayorMenor(listaMayorMenor);

// 8.Crea una función que devuelva la suma de todos los elementos en una lista.
// let listaNum = [1, 2, 3, 4, 5];
// function sumarLista(listaNum) {
//   let suma = 0;

//   for (let i = 0; i < listaNum.length; i++) {
//     suma += listaNum[i];
//   }
//   console.log(`La suma de la lista es: ${suma}`);
// }
// sumarLista(listaNum);
// 9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
// o -1 si no existe en la lista.
// function posicionElemento(elemento) {
//   let lista = [2, 2, 3, 4, 5];
//   let listaPosiciones = [];
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] == elemento) {
//       listaPosiciones.push(i + 1);
//     }
//   }
//   if (listaPosiciones.length == 0) {
//     return -1;
//   } else {
//     return listaPosiciones;
//   }
// }
// console.log(
//   `El elemento ingresado se encuentra en la posición: [${posicionElemento(2)}]`
// );

// 10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma
// de los elementos uno a uno.
// let lista1 = [1, 2, 3];
// let lista2 = [1, 2, 3];
// function sumarArrays(lista1, lista2) {
//   let listaSuma = [];
//   for (let i = 0; i < lista1.length; i++) {
//     listaSuma.push(lista1[i] + lista2[i]);
//   }
//   return listaSuma;
// }
// console.log(sumarArrays(lista1, lista2));

// 11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// let lista = [1, 2, 3, 4];
// function listaCuadrado(lista) {
//   let listaCuadrado = [];
//   for (let i = 0; i < lista.length; i++) {
//     listaCuadrado.push(lista[i] * lista[i]);
//   }
//   return listaCuadrado;
// }
// console.log(`El cuadrado de cada elemento de la lista: [${listaCuadrado(lista)}]`);
