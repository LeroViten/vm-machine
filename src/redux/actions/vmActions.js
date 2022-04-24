import {
  ADD_VM,
  REMOVE_VM,
  PUSH_TO_REPO,
  ACTIVATE_VM,
  SELECT_VM,
} from '../types';
import shortid from 'shortid';

export const addVM = ({
  ip,
  login,
  password,
  processor,
  name,
  value,
  isActive,
  repo,
}) => ({
  type: ADD_VM,
  payload: {
    id: shortid.generate(),
    ip,
    login,
    password,
    name,
    processor,
    value,
    repo,
    isActive,
  },
});

export const activateVm = (payload) => ({
  type: ACTIVATE_VM,
  payload,
});

export const selectVm = (payload) => ({
  type: SELECT_VM,
  payload,
});

export const removeVM = (payload) => ({
  type: REMOVE_VM,
  payload: payload,
});

export const pushToRepo = (value) => ({
  type: PUSH_TO_REPO,
  payload: value,
});
