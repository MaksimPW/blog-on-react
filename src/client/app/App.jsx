import React from 'react';

import { posts } from './constants/static/posts';

import MainLayout from './components/layouts/MainLayout';
import BlogPage from './components/containers/BlogPage';

import './css/layout.css';

const App = () => (
  <MainLayout>
    <BlogPage posts={posts} />
  </MainLayout>
);

export default App;
