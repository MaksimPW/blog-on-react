import { fetchPost } from './../actions/Post';
import { editPostsPath } from './../helpers/routes/paths';

import initialLoad from './../helpers/initialLoad';

import EditPostContainer from './../containers/EditPostContainer';

const EditPostRoute = {
  exact: true,
  path: editPostsPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

export default EditPostRoute;
