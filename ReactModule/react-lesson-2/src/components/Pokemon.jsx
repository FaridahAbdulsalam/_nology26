import pokemon from "../data/PokemonObj.js";

const Pokemon = () => {
  const pokemons = pokemon.map((poke) => {
    return (
      <div>
        <h1>{poke.name}</h1>
        <p>{poke.weakness}</p>
        <p>{poke.evolvesTo}</p>
      </div>
    );
  });

  return (
    <div>
      <p>{pokemons}</p>
    </div>
  );
};

export default Pokemon;
