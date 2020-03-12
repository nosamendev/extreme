import { combineReducers } from 'redux';

import fetchCardsReducer from './fetchCardsReducer';

export default combineReducers({
  fetchCardsReducer: fetchCardsReducer
});
