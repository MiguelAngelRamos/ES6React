// El ambito de las variables, ejemplos: var, let y const
var edad = 20;

if(true) {
  var edad = 40;
  console.log(edad); //?40
}
console.log(edad); // ?40

/**
 * var no respeta el ambito o scope del if, sino que vuelve a crear una variable
 * con el mismo nombre y le cambia el valor, a la variable declarada en un scope superior
 */

// veamos el ejemplo con let

let altura = 150;

if(true) {
  let alturaIf = 20;
  console.log(alturaIf); // 20
}
// console.log(alturaIf);
console.log(altura); // 150

// let si respeta el scope o ambito del if y no altera la que tiene un scope superior