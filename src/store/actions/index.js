import {
  FETCH_CARDS,
  FETCH_CARDS_START,
  FETCH_CARDS_FAILED
} from '../actions/types';

import cards from '../../api/cards';

export const fetchCards = () => async dispatch => {
  dispatch({ type: FETCH_CARDS_START });

  try {
    const response = await cards.get('/');
    dispatch({ type: FETCH_CARDS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CARDS_FAILED, payload: error });
  }
};

export const fetchCardsFailed = error => {
  return {
    type: FETCH_CARDS_FAILED,
    payload: error
  };
};
