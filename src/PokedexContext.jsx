// src/PokedexContext.js
import { createContext, useState, useEffect } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {

  const [pokedex, setPokedex] = useState([]);
  const [favourites, setFavourites] = useState([]);


  // ✅ Fetch from json-server
  useEffect(() => {
    fetch("http://localhost:5000/pokedex")
      .then((res) => res.json())
      .then((data) => setPokedex(data));

    fetch("http://localhost:5000/favourites")
      .then((res) => res.json())
      .then((data) => setFavourites(data));
  }, []);


  // ✅ Add to pokedex
    const addToPokedex = (pokemon) => {
    fetch("http://localhost:5000/pokedex", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    })
      .then((res) => res.json())
      .then((newPokemon) => setPokedex([...pokedex, newPokemon]));
  };

  // ✅ Remove from pokedex
    const removeFromPokedex = (name) => {
    const pokemon = pokedex.find((p) => p.name === name);
    if (!pokemon) return;

    fetch(`http://localhost:5000/pokedex/${pokemon.id}`, {
      method: "DELETE",
    }).then(() =>
      setPokedex(pokedex.filter((p) => p.name !== name))
    );
  };

  const addToFavourites = (pokemon) => {
    if (!favourites.find((fav) => fav.name === pokemon.name)) {
      setFavourites([...favourites, pokemon]);
    }
  };

  const removeFromFavourites = (name) => {
    setFavourites(favourites.filter((fav) => fav.name !== name));
  };

  return (
    <PokedexContext.Provider value={{ pokedex, favourites, addToPokedex, removeFromPokedex,  addToFavourites, removeFromFavourites,}}>
      {children}
    </PokedexContext.Provider>
  );
};
