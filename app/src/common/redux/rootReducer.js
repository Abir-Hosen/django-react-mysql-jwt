import { combineReducers } from 'redux';
import { basicData } from './resources/basicResources'
import { authInfo } from './resources/authResources'

const rootReducer = combineReducers({
  basicData,
  authInfo,
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return rootReducer(state, action);
};