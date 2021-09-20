// Objetos
const mascota = {
  nombre: 'Rocky',
  edad: 4,
  vivo: true,
  razas: ['pitbull', 'dogo']
}
// agregar propiedad
mascota.id = 31314;
// acceder a sus propiedades
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);
console.log(mascota.razas[1]);
console.log(mascota);

// Destructuring
const { nombre, edad, vivo, razas } = mascota;

console.log(nombre);
console.log(edad);
console.log(vivo);
console.log(razas[1]);