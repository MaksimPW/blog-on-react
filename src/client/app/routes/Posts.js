import { fetchPosts } from './../actions/Posts';
import PostsContainer from './../containers/PostsContainer';

import initialLoad from './../helpers/initialLoad';

const PostsRoute = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

export default PostsRoute;
