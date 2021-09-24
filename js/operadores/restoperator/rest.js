// rest operator dentro de una funcion, tomar todos los argumentos y los transforma en una arreglo. el parametro rest siempre debe ir al final( es decir debe ser el ultimo parametro)

const rest  = (a, ...arguments) => {
  console.log(a);
  console.log(arguments);
}

rest(1,2,3);

// object destructuring
const mascota = {
 nombre: 'rocky',
 edad: 12,
 peso: 30
}

// const {nombre, edad, peso} = mascota;

// console.log(nombre);
// console.log(edad);
// console.log(peso);

const {nombre, ...operadorRest} = mascota
console.log(nombre);
console.log(operadorRest);

// object arreglos
const nombres = ['Pedro', 'Juan', 'Maria', 'Andrea'];
// const [a,b,c,d] = nombres;
// console.log(a,b,c,d);
const [a, ...usersAdmin] = nombres;
console.log(a);
console.log(usersAdmin);

