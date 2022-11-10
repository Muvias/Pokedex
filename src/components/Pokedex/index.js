import { useContext, useState } from 'react';
import { PokeContext } from '../../providers/pokemon';

import { Input, PokemonContainer } from './styled';

import backgroundPokemon from '../../utils/images/backCircle.png';

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
          if (
            pokemon.data.name.toLowerCase().includes(search.toLowerCase())
            || pokemon.data.id === Number(search)
            || pokemon.data.types[0].type.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return pokemon;
          } else return "";
        }).map((pokemon) => {
          return (
            <div key={String(pokemon.data.name)} className={`pokemon-container ${pokemon.data.types[0].type.name}`}>
              <div className="pokemon-strings-container">
                <h2 className="pokemon">{pokemon.data.name}</h2>
                {pokemon.data.types.map((type) => (
                  <div key={String(type.type.name)} className="pokemon-type">
                    {type.type.name}
                  </div>
                ))}
              </div>
              <div className="right-container">
                <span className="pokemon-id">#{pokemon.data.id}</span>
                <img src={pokemon.data.sprites.front_default} className="pokemonImg" alt="Pokemon" />
                <img src={backgroundPokemon} className="backgroundImg" alt="Background Pokemon" />
              </div>
            </div>
          )
        })
        }
      </PokemonContainer>
    </>
  );
}
