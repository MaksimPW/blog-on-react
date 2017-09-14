import React from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

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

export default EditPostView;
