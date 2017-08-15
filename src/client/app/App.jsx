import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import Routes from './routes';

import './css/layout.css';

const App = () => (
  <MainLayout>
    <Routes />
  </MainLayout>
);

export default App;
