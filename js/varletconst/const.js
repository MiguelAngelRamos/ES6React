// const se utiliza para definir constantes, estas no pueden cambiar su valor, pero hay ciertas
// excepciones con los objetos y arreglos

const arrayNumero = [10, 20, 30, 'HolaMundo'];
arrayNumero.push(40);
// arrayNumero[0] = 350;
// console.log(arrayNumero[0]);
console.log(arrayNumero); // [10, 20, 30]; error? ,  [10, 20, 30, 40]

/* Cuando declaramos un array o objeto como constante y usamos funciones (push), nos 
  permite añadir un nuevo elemento
 */

// const Objeto
const persona  = {
  nombre: 'Miguel',
  edad: 37
}
// cambiando el valor a la propiedad
persona.edad = 18;
// Puedo añadir nuevas propiedades
persona.pais = 'Chile';

console.log(persona);