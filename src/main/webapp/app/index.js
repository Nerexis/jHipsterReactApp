import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
