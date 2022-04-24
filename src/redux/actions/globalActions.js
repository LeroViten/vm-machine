import {
  TOGGLE_VALIDATION,
  PLACE_VM,
  TOGGLE_MODAL,
  OPEN_EDITOR,
  OPEN_LIST,
} from '../types';

export const toggleValidation = (value) => ({
  type: TOGGLE_VALIDATION,
  payload: value,
});

export const toggleModal = (value) => ({
  type: TOGGLE_MODAL,
  payload: value,
});

export const openEditor = (value) => ({
  type: OPEN_EDITOR,
  payload: value,
});

export const openList = (value) => ({
  type: OPEN_LIST,
  payload: value,
});

export const placeVM = (value) => ({
  type: PLACE_VM,
  payload: value,
});
