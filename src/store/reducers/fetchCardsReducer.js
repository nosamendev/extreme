import {
  FETCH_CARDS,
  FETCH_CARDS_START,
  FETCH_CARDS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  error: false,
  loading: false,
  description: '',
  cards: []
};

const fetchCardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      state.cards = action.payload;
      return { ...state, loading: false };
    case FETCH_CARDS_START:
      return { ...state, loading: true };
    case FETCH_CARDS_FAILED:
      return {
        ...state,
        loading: false,
        description: action.payload,
        error: true
      };

    default:
      return state;
  }
};

export default fetchCardsReducer;
