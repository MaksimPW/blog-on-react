import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { updatePost } from './../actions/Post';
import EditPostView from './../components/ui/Edit';

const stateToProps = (state) => ({
  initialValues: {
    title: state.post.entry.title,
    author: state.post.entry.details.author
  }
});

export default connect(stateToProps)(
  reduxForm({
    form: 'editPost',
    onSubmit: (values, dispatch, props) => (
      dispatch(updatePost(props.match.params.id, values))
    )
  })(EditPostView));
