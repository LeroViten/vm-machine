import { ADD_VM, REMOVE_VM } from '../types';
import shortid from 'shortid';

export const addVM = ({ ip, login, password, processor, name }) => ({
  type: ADD_VM,
  payload: {
    id: shortid.generate(),
    ip,
    login,
    password,
    name,
    processor,
  },
});

export const removeVM = (id) => ({
  type: REMOVE_VM,
  payload: id,
});
