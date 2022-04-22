import { ADD_VM, REMOVE_VM } from '../types';

const initialState = [];
export const vmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VM:
      return [action.payload, ...state];

    case REMOVE_VM:
      return state.filter((vm) => vm.id !== action.payload);

    default:
      return state;
  }
};
