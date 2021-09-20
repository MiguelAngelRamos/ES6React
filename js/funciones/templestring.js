// Template String   alt + 96
const numero = (num) => {
  return 'El numero es: ' + num;
}
const resultado = numero(10);
console.log(resultado);
// const numeroTemplateString = (num) => {
//   return `El numero es ${num *2}`;
// }
const numeroTemplateString = num => (`El numero es ${num *2}`);

const resultadoTemplate = numeroTemplateString(50);
console.log(resultadoTemplate);