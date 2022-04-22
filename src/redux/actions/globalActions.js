import { TOGGLE_VALIDATION } from '../types';

export const toggleValidation = (value) => ({
  type: TOGGLE_VALIDATION,
  payload: value,
});
