const obj1 = {
  a: 10,
  b: 2,
}

const obj2 = {
  b: 5,
  c: 'saludo'
}

// hacemos una copia, no hay error de referencia.
const obj3 = {
  ...obj1
}

console.log(obj3);

const obj4 = {...obj1, ...obj2};

console.log(obj4);

const obj5 = {
  ...obj1,
  loading: true,
  data: {
    prop: 'admin',
    producto: 'notebook'
  }
}

console.log(obj5);