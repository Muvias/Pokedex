/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from '../../api';

import { PokemonContainer, Input } from './styled';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

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
    <>
      <Input>
        <input type="search" value={search} placeholder="Buscar Pokemon" onChange={(e) => setSearch(e.target.value)} />
      </Input>
      <PokemonContainer>
        {pokemons.filter((pokemon) => {
          if (search === '') {
            return pokemon;
          } if (
            pokemon.data.name.toLowerCase().includes(search.toLowerCase())
            || pokemon.data.id === Number(search)
          ) {
            return pokemon;
          }
        }).map((pokemon) => (
          <div key={String(pokemon.data.name)} className="pokemon-container">
            <div className="pokemon-strings-container">
              <span className="pokemon">{pokemon.data.name}</span>
              {pokemon.data.types.map((type) => (
                <span
                  key={String(type.type.name)}
                  className="pokemon-type"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="right-container">
              <div className="img-container">
                <img src={pokemon.data.sprites.front_default} alt="Pokemon" />
              </div>
              <span className="pokemon-id">#{pokemon.data.id}</span>
            </div>
          </div>
        ))}
      </PokemonContainer>
    </>
  );
}
