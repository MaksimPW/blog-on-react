import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from './../components/containers/BlogPage';
import Post from './../components/containers/Post';

import { postsPath } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={BlogPage} />
    <Route path={postsPath()} component={Post} />
  </Switch>
);

export default Routes;

