import { fetchPosts } from './../actions/Posts';
import BlogPage from './../components/containers/BlogPage';

const PostsRoute = {
  exact: true,
  path: '/',
  component: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts())
  }
};

export default PostsRoute;
