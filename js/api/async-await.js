// Que se comporta de forma asincrona
const getPokemones = async () => {
  try {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await resp.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }

};

getPokemones();