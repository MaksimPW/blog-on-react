import React from 'react';
import moment from 'moment';

import BlogPage from './components/containers/BlogPage'; 
import { posts } from './constants/static/posts';

const App = () => (
  <BlogPage posts={posts} />
);

export default App;

