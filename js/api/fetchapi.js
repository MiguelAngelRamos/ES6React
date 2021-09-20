// https://pokeapi.co/api/v2/pokemon/

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res) => {
    return res.json()
}).then((data)=> {
    console.log(data);
}).catch(
  (err) => console.log(err)
);