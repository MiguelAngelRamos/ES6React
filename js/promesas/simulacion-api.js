function myApi() {
  return new Promise( function (resolve, reject) {

    const resultJson = false;

    if(resultJson) {
      const producto = {
        nombre: 'Iphone',
        color: 'space gray'
      }
      resolve(producto)
    } else {
      reject("error!");
    }
  });
}

myApi().then( function(product) {
  console.log(product);
}).catch( function(e) {
  console.log(e);
})