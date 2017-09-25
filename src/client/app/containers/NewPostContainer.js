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

const validate = (values) => {
  const errors = {};

  if (values.title.length == 0)
    errors.title = 'Не должно быть пустым';
  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.title.length < 5)
    warnings.title = 'Желательно сделать заголовок больше 5 символов';
  return warnings;
};

const submit = (values, dispatch) => {
  dispatch(createPost(values));
};

export default connect(stateToProps)(
  reduxForm({
    form: 'newPost',
    onSubmit: submit,
    validate,
    warn
  })(NewPostView));
