
const potenciar = (exponente, ...bases) => {
  console.log(exponente)
  console.log(bases)
  return bases.map(x => x**exponente)
 }
 const resultado = potenciar(3, 2, 3, 4, 5)
 // console: 3
 // console: [2, 3, 4, 5]
 // return: [8, 27, 64, 125]
 
 console.log(resultado);
 // funcion que devuelve un arreglo
 const useState = () => ['contador', () => {}];
//  console.log(useState());
 const [contador, setContador] = useState();