// Que se comporta de forma asincrona

const getPokemones = async () => {
  try {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    console.log(data.results);
    // generar un nuevo array
    const arrayNombres = data.results.map( pokemon => pokemon.name);
    // filtrar por nombre
    const sinBulbasaur = data.results.filter(pokemon => pokemon.name !== 'bullbasaur')
    console.log(arrayNombres);
    console.log(sinBulbasaur);
  } catch (error) {
    console.log(error);
  }
}

getPokemones();

// const getPokemones = async () => {
//   try {
//     const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
//     const data = await resp.json();
//     console.log(data.results);
//   } catch (error) {
//     console.log(error);
//   }

// };

// getPokemones();