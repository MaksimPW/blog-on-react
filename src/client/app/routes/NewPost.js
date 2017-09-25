import { newPostsPath } from './../helpers/routes/paths';

import NewPostContainer from './../containers/NewPostContainer';

const NewPostRoute = {
  exact: true,
  path: newPostsPath,
  component: NewPostContainer
};

export default NewPostRoute;
