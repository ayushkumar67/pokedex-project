export default function PokemonList({
  pokemonList,
  onSelectPokemon,
}) {
  return (
    <div className="list-panel">
      <h2>Pokémon List</h2>

      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <button
            key={pokemon.name}
            className="pokemon-button"
            onClick={() => onSelectPokemon(pokemon.name)}
          >
            #{index + 1} {pokemon.name}
          </button>
        ))}
      </div>
    </div>
  );
}