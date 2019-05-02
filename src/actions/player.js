import { NEW_PLAYER } from './types';

export const savePlayerName = player => {
  return dispatch => {
    dispatch({
      type: NEW_PLAYER,
      payload: player
    });
  };
};
