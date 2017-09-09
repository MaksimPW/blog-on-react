import { createStore, applyMiddleware, compose } from 'redux';

import DevTools from './../containers/DevTools';

import APIMiddleware from './../middleware/API';
import reducers from './../reducers/index';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
