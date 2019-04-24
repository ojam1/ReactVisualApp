import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import WelcomePage from './components/WelcomePage';
import './styles/styles.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <WelcomePage className='center-container' />
    </div>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
