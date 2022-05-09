import { useContext, useState } from 'react';
import { PokeContext } from '../../providers/pokemon';

import { Input, PokemonContainer } from './styled';

export default function Pokedex() {
  const { pokemons } = useContext(PokeContext);
  const [search, setSearch] = useState('');

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
            || pokemon.data.types[0].type.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return pokemon;
          }
        }).map((pokemon) => {
          let pokemonType = 'normal';
          if (pokemon.data.types[0].type.name === 'water') {
            pokemonType = 'water'
          } if (pokemon.data.types[0].type.name === 'fire') {
            pokemonType = 'fire'
          } if (pokemon.data.types[0].type.name === 'grass') {
            pokemonType = 'grass'
          } if (pokemon.data.types[0].type.name === 'bug') {
            pokemonType = 'bug'
          } if (pokemon.data.types[0].type.name === 'electric') {
            pokemonType = 'electric'
          } if (pokemon.data.types[0].type.name === 'ground') {
            pokemonType = 'ground'
          } if (pokemon.data.types[0].type.name === 'poison') {
            pokemonType = 'poison'
          } if (pokemon.data.types[0].type.name === 'fairy') {
            pokemonType = 'fairy'
          }
          return (
            <div key={String(pokemon.data.name)} className={`pokemon-container ${pokemonType}`}>
              <div className="pokemon-strings-container">
                <span className="pokemon">{pokemon.data.name}</span>
                {pokemon.data.types.map((type) => (
                  <span key={String(type.type.name)} className="pokemon-type">
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
          )})}
      </PokemonContainer>
    </>
  );
}
