import { useContext } from "react";
import { PokedexContext } from "./PokedexContext";
import "./Pokedex.css";


const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const Pokedex = () => {
  const { pokedex } = useContext(PokedexContext);

return (
    <div className="pokedex-container">
      <h1>This is your Pokedex</h1>

      {pokedex.length === 0 ? (
        <p>No Pokémon added yet!</p>
      ) : (
        <div className="pokedex-grid">
          {pokedex.map((pokemon, index) => (
            <div key={index} className="pokedex-card">
              <h2 className="pokemon-name">{pokemon.name}</h2>

              {/* Show types */}
               {/* Show types with color */}
              <div>
                {pokemon.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="pokemon-type"
                    style={{
                      background: typeColors[t.type.name],
                      color: "#fff",
                      margin: "0 5px",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>

              {/* Official artwork */}
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="pokemon-artwork"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;