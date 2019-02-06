import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <h1>App</h1>
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
