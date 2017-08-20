import { fetchPosts } from './../actions/Posts';
import PostsContainer from './../containers/PostsContainer';

const PostsRoute = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts())
  }
};

export default PostsRoute;
