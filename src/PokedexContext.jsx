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

  return (
    <PokedexContext.Provider value={{ pokedex, addToPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};
