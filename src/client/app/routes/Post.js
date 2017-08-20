import { fetchPost } from './../actions/Post';
import { postsPath } from './../helpers/routes/paths';

import PostContainer from './../containers/PostContainer';

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id))
  }
};

export default PostRoute;
