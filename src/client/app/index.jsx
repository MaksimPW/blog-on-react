import React from 'react';
import {render} from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootEl = document.getElementById('app');
render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  rootEl
);

module.hot.accept();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
