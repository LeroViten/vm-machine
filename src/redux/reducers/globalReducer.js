import { TOGGLE_VALIDATION, PLACE_VM } from '../types';

const initialState = {
  isValid: false,
  isPlaced: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VALIDATION:
      return { isValid: action.payload, isPlaced: state.isPlaced };
    case PLACE_VM:
      return { isValid: state.isValid, isPlaced: action.payload };
    default:
      return state;
  }
};
