import { ADD_VM, REMOVE_VM, PUSH_TO_REPO, ACTIVATE_VM } from '../types';

const initialState = {
  collection: [],
  repo: [],
};
export const vmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VM:
      return {
        collection: [action.payload, ...state.collection],
        repo: state.repo,
      };

    case PUSH_TO_REPO:
      return {
        collection: state.collection,
        repo: [...state.repo, action.payload],
      };

    case ACTIVATE_VM:
      return {
        collection: action.payload,
        repo: state.repo,
      };

    case REMOVE_VM:
      return state.filter((vm) => vm.id !== action.payload);

    default:
      return state;
  }
};
