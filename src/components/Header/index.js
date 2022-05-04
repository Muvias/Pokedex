/* eslint-disable max-len */
// import { useState } from 'react';
import { Container, Nav } from './styled';

import cabeçalho from '../images/top.png';
import pokebola from '../images/pokeball.png';
// import lupa from '../images/lupa.png';

export default function Header() {
  // const [search, setSearch] = useState('');

  return (
    <Container>
      <Nav>
        <img src={cabeçalho} alt="Foto" crossOrigin="" className="cab" />
        <img src={pokebola} alt="Foto" crossOrigin="" className="pok" />
      </Nav>

      {/* <Input>
        <input type="search" value={search} placeholder="Buscar Pokemon" onChange={(e) => setSearch(e.target.value)} />
        {pokemons.filter((pokemon) => {
          if (search === '') {
            return pokemon;
          } if (pokemon.data.name.toLowerCase().includes(search.toLowerCase())) {
            return pokemon;
          }
        })}
        <img src={lupa} alt="foto" crossOrigin="" className="lupa" />
      </Input> */}

      <h1>Pokedex</h1>
    </Container>
  );
}
