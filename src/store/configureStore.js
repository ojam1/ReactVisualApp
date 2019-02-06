import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import playerReducer from '../reducers/player';

export default () => {
  const store = createStore(
    combineReducers({
      player: playerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};
