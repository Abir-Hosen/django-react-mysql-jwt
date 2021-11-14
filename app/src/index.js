import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import persistor from './common/redux/reduxPersist'
import store from './common/redux'

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='myapp'>
      <LastLocationProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
