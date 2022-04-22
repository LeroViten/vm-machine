import { TOGGLE_VALIDATION, TOGGLE_MODAL } from '../types';

const initialState = {
  isValid: false,
  showModal: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VALIDATION:
      return { isValid: action.payload };
    case TOGGLE_MODAL:
      return [action.payload, ...state];
    default:
      return state;
  }
};
