import React from 'react';
import {render} from 'react-dom';

import MainLayout from './components/layouts/MainLayout';
import './css/layout.css';

import { Provider } from 'react-redux';
import store from './store/index';
import history from './helpers/history';
import prepareData from './helpers/prepareData';


import DevTools from './containers/DevTools';

import { BrowserRouter, matchPath, Switch } from 'react-router-dom';
import createRoutes from './routes/index';
import RouteWithSubRoutes from './helpers/routes/RouteWithSubRoutes';

import { parse } from 'qs';
import { assign } from 'lodash/object';

const routes = createRoutes();
function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      assign(routeState.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, routeState);
}

class App extends React.Component {
  componentWillMount() {
    history.listen(historyCb);
    historyCb(window.location);
  }

  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
          </MainLayout>
       </BrowserRouter>
      </Provider>
    );
  }
}

render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
