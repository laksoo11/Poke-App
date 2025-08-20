import { useContext, useState } from "react";
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
  const {
     pokedex,
    favourites,
    removeFromPokedex,
    addToFavourites,
    removeFromFavourites,

  } = useContext(PokedexContext);


  const [showFavourites, setShowFavourites] = useState(false);


   const handleDelete = (name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to remove ${name} from your Pokédex?`
    );
    if (confirmDelete) {
      removeFromPokedex(name);
      // setFavourites(favourites.filter((fav) => fav.name !== name));
    }
  };

  //  // ✅ Add favourite with alert
  // const handleAddFavourite = (pokemon) => {
  //   addToFavourites(pokemon);
  //   alert(`${pokemon.name} has been added to your favourites!`);
  // };

 const handleAddFavourite = (pokemon) => {
    if (!favourites.find((fav) => fav.name === pokemon.name)) {
      addToFavourites(pokemon);
      alert(`${pokemon.name} has been added to your favourites!`);
    } else {
      alert(`${pokemon.name} is already in favourites!`);
    }
  };

  // ✅ Remove favourite
  const handleRemoveFavourite = (name) => {
    removeFromFavourites(name);
    alert(`${name} has been removed from your favourites!`);
  };

  


const displayList = showFavourites ? favourites : pokedex;
  

return (
    <div className="pokedex-container">
      <h1>This is your Pokedex</h1>

       {/* ✅ Toggle button */}
      <button
        onClick={() => setShowFavourites(!showFavourites)}
        className="toggle-btn"
      >
        {showFavourites ? "Show All Pokémon" : "Show Favourites"}
      </button>

      {displayList.length === 0 ? (
        <p>{showFavourites ? "No favourites yet!" : "No Pokémon added yet!"}</p>
      ) : (

        <div className="pokedex-grid">
          {displayList.map((pokemon, index) => (
            <div key={index} className="pokedex-card">
              <h2 className="pokemon-name">{pokemon.name}</h2>

            
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

               {/* ✅ Add to favourites */}
              <button
                onClick={() => handleAddFavourite(pokemon)}
                className="fav-btn"
              >
               {favourites.find((fav) => fav.name === pokemon.name) 
              ? "❤️ Added to Favourites" 
              : "🤍 Add to Favourites"}
              </button>

              {/* 💔 Remove from favourites */}
              {favourites.find((fav) => fav.name === pokemon.name) && (
              <button
                onClick={() => handleRemoveFavourite(pokemon.name)}
                className="remove-fav-btn"
              >
                  💔 Remove from Favourites
              </button>
                )}

                 {/* ❌ Remove from Pokedex */}
              <button
                onClick={() => handleDelete(pokemon.name)}
                className="delete-btn"
              >
                  ❌ Remove from Pokedex
              </button>


            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;