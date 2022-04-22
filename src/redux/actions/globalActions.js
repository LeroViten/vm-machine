import { TOGGLE_VALIDATION, PLACE_VM } from '../types';

export const toggleValidation = (value) => ({
  type: TOGGLE_VALIDATION,
  payload: value,
});

export const placeVM = (value) => ({
  type: PLACE_VM,
  payload: value,
});
