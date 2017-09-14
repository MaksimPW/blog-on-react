import { connect } from 'react-redux';

import { reduxForm, SubmissionError } from 'redux-form';
import EditPostView from './../components/ui/Edit';

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => {
  return sleep(1000).then(() => {
    if(values.title.length == 7)
      throw new SubmissionError({ title: 'Имитация серверной ошибки при title lenhth == 7' });
    else {
      alert(JSON.stringify(values));
    }
  })
};

const stateToProps = (state) => ({
  initialValues: {
    title: state.post.entry.title,
    author: state.post.entry.details.author
  }
});

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.title,
      author: state.post.entry.details.author
    }
  })
)(reduxForm({
  form: 'editPost',
  onSubmit: submit
})(EditPostView));
