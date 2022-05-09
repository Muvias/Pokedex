import { createContext, useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from '../api';

export const PokeContext = createContext();

export function PokeProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const data = await getPokemons();
      const promises = data.map(async (pokemon) => getPokemonData(pokemon.url));

      const results = await Promise.all(promises);
      setPokemons(results);
    }

    fetchPokemons();
  }, []);

  return (
    <PokeContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokeContext.Provider>
  );
}
