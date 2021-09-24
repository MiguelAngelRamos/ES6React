// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const numeros = [5,1,2,4];
// (acumulador, element, indice, arrayqueseestaiterando)
const resultado = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
// const resultado = numeros.reduce((acumulador, element) =>{ 
//   return acumulador + element
// });
console.log(resultado);

const valorMaximo = (a, b) => Math.max(a,b);

const resultadoMax = numeros.reduce(valorMaximo, 0);
console.log(resultadoMax);

const usuarios = [
  {id: 1, name: 'Pedro'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Diego'}
];
const resultadoString = usuarios.reduce((acumulador, element) => 
`${acumulador === ''?'': `${acumulador}, `}${element.name}`, '');
console.log(resultadoString);

const r1 = usuarios.reduce((acc, el) => {
  if(el.id <2) {
    return acc;
  }
  return acc.concat(el);
}, [])

console.log(r1);