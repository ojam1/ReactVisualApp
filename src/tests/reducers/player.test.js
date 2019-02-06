import reducer from '../../reducers/player';
import { NEW_PLAYER, SETTLE_SCORE } from '../../actions/types';

describe('current player reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      player: '',
      finalScore: 0
    });
  });

  it('should handle NEW_PLAYER', () => {
    expect(
      reducer(
        {
          player: '',
          finalScore: 0
        },
        {
          type: NEW_PLAYER,
          payload: 'player'
        }
      )
    ).toEqual({
      player: 'player',
      finalScore: 0
    });
  });

  it('should handle SETTLE_SCORE', () => {
    expect(
      reducer(
        {
          player: 'player',
          finalScore: 0
        },
        {
          type: SETTLE_SCORE,
          payload: 124
        }
      )
    ).toEqual({
      player: 'player',
      finalScore: 124
    });
  });
});
