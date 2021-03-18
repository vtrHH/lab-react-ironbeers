import axios from 'axios';

export const listBeers = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  return response.data;
};

export const loadSingleBeer = async (id) => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/${id}`
  );
  return response.data;
};

export const loadRandomBeer = async () => {
  const response = await axios.get(
    `https://ih-beers-api2.herokuapp.com/beers/random`
  );
  return response.data;
};

export const addBeer = async () => {};
