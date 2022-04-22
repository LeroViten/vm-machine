import { ADD_VM, REMOVE_VM, PUSH_TO_REPO } from '../types';

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

    case REMOVE_VM:
      return state.filter((vm) => vm.id !== action.payload);

    default:
      return state;
  }
};
