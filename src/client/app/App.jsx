import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import Routes from './routes';

import { Provider } from 'react-redux';

import store from './store/index';

import './css/layout.css';

const App = () => (
  <MainLayout>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MainLayout>
);

export default App;
