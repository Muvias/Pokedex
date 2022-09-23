import { Container, Nav } from './styled';

import cabeçalho from '../../utils/images/top.png';
import pokebola from '../../utils/images/pokeball.png';

export default function Header() {
  return (
    <Container>
      <Nav>
        <img src={cabeçalho} alt="Foto" crossOrigin="" className="cab" />
        <img src={pokebola} alt="Foto" crossOrigin="" className="pok" />
      </Nav>

      <h1>Pokedex</h1>
    </Container>
  );
}
