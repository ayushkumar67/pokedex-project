export default function PokemonCard({ pokemon }) {
  if (!pokemon) {
    return (
      <div className="details-panel">
        <h2>Pokédex</h2>
        <p className="placeholder-text">
          Select a Pokémon from the list to view details.
        </p>
      </div>
    );
  }

  const artwork =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="details-panel">
      <div className="pokemon-header">
        <span className="pokemon-id">
          #{pokemon.id}
        </span>

        <h2 className="pokemon-title">
          {pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1)}
        </h2>
      </div>

      <img
        src={artwork}
        alt={pokemon.name}
        className="pokemon-image"
      />

      <div className="pokemon-meta">
        <div className="meta-card">
          <span className="meta-label">
            Height
          </span>
          <span className="meta-value">
            {pokemon.height / 10} m
          </span>
        </div>

        <div className="meta-card">
          <span className="meta-label">
            Weight
          </span>
          <span className="meta-value">
            {pokemon.weight / 10} kg
          </span>
        </div>
      </div>

      <h3>Types</h3>

      <div className="badge-container">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className={`type-badge ${type.type.name}`}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <h3>Abilities</h3>

      <div className="badge-container">
        {pokemon.abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className="ability-badge"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>

      <h3>Base Stats</h3>

      <div className="stats-grid">
        {pokemon.stats.map((stat) => (
          <div
            key={stat.stat.name}
            className="stat-row"
          >
            <div className="stat-header">
              <span className="stat-name">
                {stat.stat.name.replace("-", " ")}
              </span>

              <span className="stat-value">
                {stat.base_stat}
              </span>
            </div>

            <div className="stat-bar">
              <div
                className="stat-fill"
                style={{
                  width: `${Math.min(
                    stat.base_stat,
                    150
                  ) / 1.5}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}