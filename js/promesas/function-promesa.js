// Funcion que retorna una promesa 
// function myPromise() {
//   return new Promise(function (resolve, reject) {
//     let suma = 2 + 8;
//     if( suma === 12 ) {
//       resolve('Es correco es igual a 12')
//     } else {
//       reject('No es correcto')
//     }
//   });
// }
// myPromise().then( function(message ) {
//   console.log(message);
// }).catch( function(err){
//   console.log(err);
// });

const myPromise = () => {
  return new Promise((resolve, reject)=> {
    const suma = 2 + 7;
    suma===12?resolve('Es correco es igual a 12'):reject('No es correcto')
  })
}
myPromise().then( message => console.log(message)).catch( err => console.log(err));