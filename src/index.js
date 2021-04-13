import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import featureReducer from '../Reducers';
//STEP 1:  Create a store
const store = createStore(featureReducer);
console.log('it is working', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
