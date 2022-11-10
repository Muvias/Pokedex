import styled from 'styled-components';


export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    width: 400px;

    padding: .8rem 1rem;
    padding-right: 1rem;
    margin-bottom: 10px;

    border: 1px solid #ddd;
    border-radius: 30px;
  }

  .lupa {
    display: block;
    position: absolute;

    top: 5px;
    right: 5px;
    padding: .4rem .6rem;
  }
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 85vw;

  gap: 1rem;

  margin: 2rem auto;

  .pokemon-container {
    display: flex;
    justify-content: space-between;

    width: 14.5rem;
    height: 11.5rem;
    padding: 1rem;

    border: 1px solid #c3c3c3;
    border-radius: 1rem;

    transition: 0.2s;

    .pokemon-strings-container {
      max-width: 49%;

      color: #fff;

      text-transform: capitalize;

      h2 {
        font-size: 1.3rem;
        font-weight: 600;
      }

      .pokemon-type {
        width: 5rem;
        padding: 0.1rem;

        text-align: center;

        margin-top: 0.5rem;

        border-radius: 1rem;
        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.2);

        background-color: rgba(253, 253, 253, 0.3);
      }
    }

    .right-container {
      display: flex;

      max-width: 60%;

      overflow: hidden;

      position: relative;

      img {
        align-self: center;
      }

      .pokemonImg {
        width: 100%;
        height: auto;

        position: absolute;

        transition: 0.7s;

        z-index: 99;
      }

      .backgroundImg {
        width: 100%;
        height: auto;

        transition: 0.7s;
      }

      span {
        position: absolute;

        right: 0;

        color: rgb(255, 255, 255);
        opacity: 0.8;
      }
    }
  }

  .pokemon-container:hover {
    box-shadow: 1px 1px 8px 4px rgba(0, 0, 0, 0.2);
  }

  .pokemon-container:hover .right-container .pokemonImg {
    width: 110%;
  }

  .pokemon-container:hover .right-container .backgroundImg {
    z-index: 1;

    transform: rotate(-180deg);
  }

  .water {
    background: #0A7DD0;
  }

  .ice {
    background: #3BA7F3;
  }

  .fire {
    background: #ff5247;
  }

  .grass {
    background: #3EDC4D;
  }

  .bug {
    background: #43DD52;
  }

  .electric {
    background: #F7DA49;
  }

  .psychic {
    background: #D1C16C;
  }

  .poison {
    background: #B149B6;
  }

  .ghost {
    background: #39153B;
  }

  .ground {
    background: #95533C;
  }

  .fairy {
    background: #D077DA;
  }

  .normal {
    background: #9A9999;
  }

  .fighting {
    background: #828080;
  }

  .rock {
    background: #7F7575;
  }

  .steel {
    background: #918E8E;
  }

  .dragon {
    background: #EED5D5;
  }

  .flying {
    background: #E7DCDC;
  }

  .dark {
    background: #312F2F;
  }
`;
