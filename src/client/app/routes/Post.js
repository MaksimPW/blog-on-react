import { fetchPost } from './../actions/Post';
import { postsPath } from './../helpers/routes/paths';

import Post from './../components/containers/Post';

const PostRoute = {
  path: postsPath(),
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id))
  }
};

export default PostRoute;
