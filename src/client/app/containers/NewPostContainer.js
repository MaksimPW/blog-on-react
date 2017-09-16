import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import { createPost } from './../actions/Post';
import NewPostView from './../components/ui/New';

const stateToProps = () => ({
  initialValues: {
    title: '',
    author: ''
  }
});

const onSubmit = (values, dispatch) => {
  dispatch(createPost(values)).catch((response) => {
    if (response.body.errors.length != 0) {
      throw new SubmissionError(response.body.errors);
    } else {
      // TODO: Redirect to root path
    }
  }).catch((error) => {
    console.log(error);
  });
}

export default connect(stateToProps)(
  reduxForm({
    form: 'newPost',
    onSubmit
  })(NewPostView));
