/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import { createContext, useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from '../api';

export const PokeContext = createContext();

export function PokeProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    async function fetchPokemons() {
      const data = await getPokemons(50 * page, 50);
      const promises = data.map(async (pokemon) => await getPokemonData(pokemon.url));

      const results = await Promise.all(promises);
      setPokemons(results);
      setTotalPages(Math.ceil(1126 / 50))
    }

    fetchPokemons();
  }, [page]);

  return (
    <PokeContext.Provider value={{
      pokemons, setPokemons,
      page, setPage,
      totalPages, setTotalPages
    }}>
      {children}
    </PokeContext.Provider>
  );
}
