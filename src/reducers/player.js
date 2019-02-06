import { NEW_PLAYER, SETTLE_SCORE } from '../actions/types';

const INITIAL_STATE = {
  player: '',
  finalScore: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_PLAYER:
      return {
        ...state,
        player: action.payload
      };
    case SETTLE_SCORE:
      return {
        ...state,
        finalScore: action.payload
      };
    default:
      return state;
  }
};
