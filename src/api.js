import axios from './services/axios';

export const getPokemons = async (offset = 0, limit = 50) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  const resul = response.data.results;
  return resul;
};

export const getPokemonData = async (url) => {
  const response = await axios.get(url);
  return response;
};
