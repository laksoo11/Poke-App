// src/PokedexContext.js
import { createContext, useState } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToPokedex = (pokemon) => {
    if (!pokedex.find(p => p.name === pokemon.name)) {
      setPokedex([...pokedex, pokemon]);
    }
  };

   const removeFromPokedex = (name) => {

    setPokedex(pokedex.filter((p) => p.name !== name));
    setFavourites(favourites.filter((fav) => fav.name !== name));
   
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
