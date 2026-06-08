import { useEffect, useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list");
      }

      const data = await response.json();
      setPokemonList(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPokemonDetails = async (name) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon details");
      }

      const data = await response.json();
      setSelectedPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Pokédex</h1>

      {loading && (
        <div className="message">
          Loading...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      <div className="content">
        <PokemonList
          pokemonList={pokemonList}
          onSelectPokemon={fetchPokemonDetails}
        />

        <PokemonCard
          pokemon={selectedPokemon}
        />
      </div>
    </div>
  );
}

export default App;