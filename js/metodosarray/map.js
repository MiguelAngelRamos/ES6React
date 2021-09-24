// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numeros = [10,20,30,40]
const resultado = numeros.map(element => element * 2);

// familiarizandonos como lo usaremos en react
const resultadoJsx = numeros.map(element => `<li>${element}</li>`)
console.log(resultadoJsx);

const usuarios = [
  {id: 1, name: 'Pedro'},
  {id: 2, name: 'Juan'},
  {id: 3, name: 'Diego'}
];

const resultadoUsuarios = usuarios.map(element => `<li>${element.name}</li>`);
console.log(resultadoUsuarios);