import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { get } from 'lodash/object';

import { updatePost } from './../actions/Post';
import EditPostView from './../components/ui/Edit';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error,
  initialValues: {
    title: get(state.post.entry, 'title'),
    author: get(state.post.entry, 'details.author', 'undef')
  }
});

export default connect(stateToProps)(
  reduxForm({
    form: 'editPost',
    enableReinitialize: true,
    onSubmit: (values, dispatch, props) => (
      dispatch(updatePost(props.match.params.id, values))
    )
  })(EditPostView));
