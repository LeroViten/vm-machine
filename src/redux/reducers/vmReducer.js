import {
  ADD_VM,
  REMOVE_VM,
  PUSH_TO_REPO,
  ACTIVATE_VM,
  SELECT_VM,
} from '../types';

const initialState = {
  collection: [],
};
export const vmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VM:
      return {
        collection: [action.payload, ...state.collection],
      };

    case PUSH_TO_REPO:
      return {
        collection: action.payload,
      };

    case ACTIVATE_VM:
      return {
        collection: action.payload,
      };

    case SELECT_VM:
      return {
        collection: action.payload,
      };

    case REMOVE_VM:
      return {
        collection: action.payload,
      };

    default:
      return state;
  }
};
