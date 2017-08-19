import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { fetchPosts } from './../actions/Posts';

import BlogPage from './../components/containers/BlogPage';
import Post from './../components/containers/Post';

import { postsPath } from './../helpers/routes/paths';

const Routes = () => (
  <Switch>
    <Route exact
      path={'/'}
      component={BlogPage}
      prepareData={
        (store) => {
          store.dispatch(fetchPosts());
        }
      }
    />
    <Route path={postsPath()} component={Post} />
  </Switch>
);

export default Routes;

