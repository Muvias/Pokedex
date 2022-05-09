import styled from 'styled-components';
import background from '../../components/images/backCircle.png';

export const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  overflow: hidden;

  .pokemon-container {
    display: flex;
    justify-content: space-between;

    height: 12rem;
    width: 18%;
    padding: 10px;

    border: 2px solid #eee;
    border-radius: 20px;

    margin-left: 10px;
    margin-bottom: 10px;

    .pokemon-strings-container {
      display: flex;
      flex-direction: column;

      padding: 5px;

      span {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 600;
        text-transform: capitalize;

        color: #fff;
      }

      .pokemon-type {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;
        font-weight: 400;

        margin-top: 10px;

        padding: 5px 10px;

        border: 1px solid #eee;
        border-radius: 20px;

        background: #BABABA;
      }
    }

    .right-container {
      display: flex;
      justify-content: end;

      width: 100%;
      height: auto;

      .img-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 10vw;
      }
      img {
        width: 100%;
        height: auto;

        background-image: url(${background});
        background-size: 100%;
        background-repeat: no-repeat;

        position: relative;

        transition: 0.7s;
      }
      .pokemon-id {
        color: #fff;

        position: absolute;
      }
    }
  }

  .pokemon-container:hover {
    box-shadow: 10px 5px 5px #514D58;
  }

  .water {
    background: #0A7DD0;
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

  .poison {
    background: #B149B6;
  }

  .ground {
    background: #95533C;
  }

  .fairy {
    background: #D077DA;
  }

  .normal {
    background: #828080;
  }
`;

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
