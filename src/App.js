import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './configs/reactotron';

import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
