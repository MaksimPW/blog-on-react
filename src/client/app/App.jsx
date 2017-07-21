import React from 'react';

import BlogPage from './components/containers/BlogPage';
import { posts } from './constants/static/posts';

import './css/layout.css';

const App = () => (
  <BlogPage posts={posts} />
);

export default App;
