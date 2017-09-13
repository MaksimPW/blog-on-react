import { fetchPost } from './../actions/Post';
import { postsPath } from './../helpers/routes/paths';

import initialLoad from './../helpers/initialLoad';

import PostContainer from './../containers/PostContainer';

const PostRoute = {
  exact: true,
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

export default PostRoute;
