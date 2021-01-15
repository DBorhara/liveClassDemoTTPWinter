//imports
import axios from 'axios';

//Action Types
import { GOT_GEN1_POKEMON, GOT_SINGLE_POKEMON } from './actionTypes';

//Initial State-- Look at stateful components and transfer over
const initialState = {
  pokemonNames: [],
  pokemon: {},
};

//Action Creators
const gotGen1Pokemon = (payload) => ({
  type: GOT_GEN1_POKEMON,
  payload,
});

const gotSinglePokemon = (payload) => ({
  type: GOT_SINGLE_POKEMON,
  payload,
});

//Thunks - Just action creators that take a function

export const getGen1Pokemon = () => {
  console.log('ABOUT TO THUNK');
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/`, {
        params: { amount: 50 },
      });

      console.log('WE WANT THIS RESPONSE', response);

      console.log('ABOUT TO DISPATCH GOTGEN1POKEMON');
      dispatch(gotGen1Pokemon(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getSinglePokemon = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/pokemon/${id}`);
      dispatch(gotSinglePokemon(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  console.log('REDUCER IS PROCESSING DISPATCHED ACTION');
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case GOT_GEN1_POKEMON:
      return { ...state, pokemonNames: action.payload };
    case GOT_SINGLE_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
