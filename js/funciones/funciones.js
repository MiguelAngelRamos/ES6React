// Funciones en javascript

// declarandola
function sumar(numero) {
  console.log(numero);
}
sumar(10); // ejecutamos la función

// ARROW FUNCTION

// Funcion tradicional
// function sumarDos(num) {
//   console.log(num);
// }

// funcion anonima con la palabra funcion

// const sumarDos = function(num) {
// console.log(num);
// }

// const sumarDos = (num) => {
//   console.log(num);
// }
// la forma mas simple
const sumarDos = num => console.log(num);
sumarDos(4);

// const operacionSuma = (num1, num2) => {
//   return num1 + num2;
// }

const operacionSuma = (num1, num2) => (num1 + num2);

const resultado = operacionSuma(5,8);
console.log(resultado);