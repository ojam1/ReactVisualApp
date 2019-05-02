import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { savePlayerName } from '../../actions/player';
import { NEW_PLAYER } from '../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('player action', () => {
  it('should add player name', () => {
    const expectedAction = savePlayerName({
      player: 'ojam'
    });

    const store = mockStore({});

    store.dispatch(expectedAction);

    expectedAction(store.getActions()).toEqual([
      {
        type: NEW_PLAYER,
        payload: {
          player: 'ojam'
        }
      }
    ]);
  });
});
