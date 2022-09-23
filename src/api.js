import axios from "axios";

export async function getPokemons(offset = 0, limit = 50) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  const resul = response.data.results;
  return resul;
};

export async function getPokemonData(url) {
  const response = await axios.get(url);
  return response;
};
