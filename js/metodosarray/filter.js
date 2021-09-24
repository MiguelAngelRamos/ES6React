// filter toma los valores de un arreglo y va devolver lo que evalua la condicion. (evalua en true)

const numeros = [15,77,88,10,44];

const resultado = numeros.filter(element => element > 10);

// const resultado = numeros.filter((element, index) => {
// console.log(index);
// return element > 2;
// });
console.log(resultado);