import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createPost } from './../actions/Post';
import NewPostView from './../components/ui/New';

const stateToProps = () => ({
  initialValues: {
    title: '',
    author: ''
  }
});

export default connect(stateToProps)(
  reduxForm({
    form: 'newPost',
    onSubmit: (values, dispatch) => (
      dispatch(createPost(values))
    )
  })(NewPostView));
