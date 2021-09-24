const exampleSpread = (a,b,c) => console.log(a+b+c);
const numeros = [1,2,3]; // toma los elementos de un arreglo o objeto y los esparce

// exampleSpread(numeros[0], numeros[1], numeros[3]);
exampleSpread(...numeros);

const array1 = [5,6];

// const array2 = array1.concat(arr1);
const array2 = [...numeros, ...array1];
console.log(array2);

// explicar el problema de copiarlos directamente.