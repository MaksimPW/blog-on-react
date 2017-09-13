import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Валидация на клиенте
const validate = (values) => {
  const errors = {};

  if (values.title.length < 5)
    errors.title = 'Длина заголовка должна быть больше 5';

  return errors;
};

// Валидация на клиенте
const warn = (values) => {
  const warnings = {};

  if (values.title.length > 25)
    warnings.title = 'Рекомендуемая длина заголовка меньше 25 символов'

  return warnings;
};


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <input className='ui input' {...input} type={type} />
    {touched && (error && (
      <div className='ui red label'>{error}</div>
    ) || (warning && (
      <div className='ui yellow label'>{warning}</div>
    )))}
  </div>
)

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className='ui form'>
      <Field label='Title' component={renderField} type='text' name='title' />
      <Field label='Author' component={renderField} type='text' name='author' />
      {(!pristine && !submitting) && <button className='ui button' onClick={reset}>Clear</button>}
      <input type='submit' className='ui submit' value='Update' />
    </form>
  </div>
);

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
