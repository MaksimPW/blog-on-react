import { editPostsPath } from './../helpers/routes/paths';

import EditPostView from './../components/ui/Edit';

const EditPostRoute = {
  exact: true,
  path: editPostsPath(),
  component: EditPostView
};

export default EditPostRoute;
