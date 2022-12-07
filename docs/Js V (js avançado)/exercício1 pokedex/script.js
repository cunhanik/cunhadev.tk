const fetchPokemon = () => {
  const getPokemonUrl = (id) => `http://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonPromises = [];

  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i)).then((response) => {
        return response.json();
      })
    );
  }
  Promise.all(pokemonPromises).then((pokemons) => {
    //console.log(pokemons);

    const lisPokemons = pokemons.reduce((accum, pokemon) => {
      const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

      accum += `
      <li class="card ${types[0]}">
      <img class="card-image" alt="${
        pokemon.name
      }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.id
      }.png" />
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">${types.join(" | ")}</p>
      </li>`;
      /*o nosso pokemon.types é um array, o método MAP() percorre todos os elementos da lista,
      usamos o MAP() com um parametro do que vai ser cada elemento que for percorrido (neste caso: typeInfo);
      Depois dizemos o que queremos de cada elemento percorrido, neste caso queremos o nome do tipo de pokemon,
      Se formos ver à api, todos os pokemons têm o types, o types é um array que contem 1 ou mais arrays que
       contêm objetos.
      Então para chegar ao nome dos types, usamos o: typeInfo.type.name

      o metodo JOIN() vai retornar uma nova string com todos os items do array, concatenados e separados por ","
      O join pode receber um argumento opcional, esse argumento opcional é um separador;
      
      Agora o nosso <p></p> Mostra os tipos de cada pokemon, separado por "|": ground | poison      
       */
      return accum;
    }, "");

    const ul = document.querySelector("[data-js='pokedex']");
    ul.innerHTML = lisPokemons;
  });
};
fetchPokemon();

//O MESMO CODIGO MELHORADO

/*
const getPokemonUrl = (id) => `http://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () => Array(150).fill().map((_, index) => 
fetch(getPokemonUrl(index + 1)).then((response) =>{
return response.json
})

const generateHTML = pokemons) => {
    //console.log(pokemons);

    return pokemons.reduce((accum, {name, id, types}) => {
      const elementalTypes = types.map((typeInfo) => typeInfo.type.name);

      accum += `
      <li class="card ${elementalTypes[0]}">
      <img class="card-image" alt="${
        name
      }" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.id
      }.png" />
        <h2 class="card-title">${id}. ${name}</h2>
        <p class="card-subtitle">${elementalTypes.join(" | ")}</p>
      </li>`;

      return accum;
    }, "");


    const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector("[data-js='pokedex']");
    ul.innerHTML = pokemons;
  });


const pokemonPromises = generatePokemonPromises();

Promise.all(pokemonPromises)
 .then(generateHTML)
 .then(insertPokemonsIntoPage)

*/
