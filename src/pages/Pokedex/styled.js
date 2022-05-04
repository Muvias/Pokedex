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
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;

        color: #514D58;
      }

      .pokemon-type {
        margin-top: 10px;

        padding: 5px 10px;

        border: 1px solid #eee;
        border-radius: 20px;

        background: #eee;
      }
    }

    .right-container {
      display: flex;
      justify-content: end;

      width: 100%;
      height: auto;

      .img-container{
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
        color: #6B705C;

        position: absolute;
      }
    }
  }

  .pokemon-container:hover {
    box-shadow: 10px 5px 5px #514D58;
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
