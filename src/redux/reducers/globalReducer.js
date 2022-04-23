import {
  TOGGLE_VALIDATION,
  TOGGLE_MODAL,
  PLACE_VM,
  OPEN_EDITOR,
  OPEN_LIST,
} from '../types';

const initialState = {
  isValid: false,
  isPlaced: false,
  isModalShown: false,
  isEditorOpen: false,
  isListOpen: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VALIDATION:
      return {
        isValid: action.payload,
        isPlaced: state.isPlaced,
        isModalShown: state.isModalShown,
        isEditorOpen: state.isEditorOpen,
        isListOpen: state.isListOpen,
      };
    case TOGGLE_MODAL:
      return {
        isValid: state.isValid,
        isPlaced: state.isPlaced,
        isModalShown: action.payload,
        isEditorOpen: state.isEditorOpen,
        isListOpen: state.isListOpen,
      };
    case OPEN_EDITOR:
      return {
        isValid: state.isValid,
        isPlaced: state.isPlaced,
        isModalShown: state.isModalShown,
        isEditorOpen: action.payload,
        isListOpen: state.isListOpen,
      };
    case OPEN_LIST:
      return {
        isValid: state.isValid,
        isPlaced: state.isPlaced,
        isModalShown: state.isModalShown,
        isEditorOpen: state.isEditorOpen,
        isListOpen: action.payload,
      };
    case PLACE_VM:
      return {
        isValid: state.isValid,
        isPlaced: action.payload,
        isModalShown: state.isModalShown,
        isEditorOpen: state.isEditorOpen,
        isListOpen: state.isListOpen,
      };
    default:
      return state;
  }
};
