import { combineReducers } from 'redux';
import { vmReducer } from './vmReducer';
import { globalReducer } from './globalReducer';

const rootReducer = combineReducers({
  vms: vmReducer,
  global: globalReducer,
});

export default rootReducer;
