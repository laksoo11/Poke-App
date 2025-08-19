// src/PokedexContext.js
import { createContext, useState } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemon) => {
    if (!pokedex.find(p => p.name === pokemon.name)) {
      setPokedex([...pokedex, pokemon]);
    }
  };

   const removeFromPokedex = (name) => {
    setPokedex((prev) => prev.filter((p) => p.name !== name));
  };

  return (
    <PokedexContext.Provider value={{ pokedex, addToPokedex, removeFromPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};
