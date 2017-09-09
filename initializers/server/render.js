import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import url from 'url';
import _ from 'lodash';
import { parse } from 'qs';

import createStore from './../../src/client/app/store/index';
import prepareData from './../../src/client/app/helpers/prepareData';

import { Switch, StaticRouter, matchPath } from 'react-router-dom';
import createRoutes from './../../src/client/app/routes/index';
import RouteWithSubRoutes from './../../src/client/app/helpers/routes/RouteWithSubRoutes';
import MainLayout from './../../src/client/app/components/layouts/MainLayout';

const routes = createRoutes();

function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};
  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      _.assign(routeState.params, match.params);
      const query = location.search ? parse(location.searh.substr(1)) : {};
      _.assign(routeState.query, query);
    }
    return match;
  });

  return routeState;
}

export default (req, res) => {
  const store = createStore();
  const location = url.parse(req.url);
  const routeState = historyCb(location);


  if (routeState.routes.length == 0) {
    res.status(404);
    res.render('views/not_found');
  } else {
    Promise.all(
      _.compact(prepareData(store, routeState))
    ).then(() => {
      const initialState = JSON.stringify(store.getState());
      const context = {};

      const content = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <MainLayout>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route}/>
                ))}
              </Switch>
            </MainLayout>
          </StaticRouter>
        </Provider>
      );

      const head = Helmet.rewind();

      res.status(200);
      res.render(
        'views/index',
        { initialState, content, head }
      );
    });
  }
};
