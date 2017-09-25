import React from 'react';
import FormField from './FormField';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const FormPost = ({ handleSubmit, pristine, submitting, reset, label }) => (
  <div>
    <h1>{label} Post</h1>
    <form onSubmit={handleSubmit} className='ui form'>
      <Field
        label='Title'
        component={FormField}
        type='text'
        name='title'
      />
      <Field
        label='Author'
        component={FormField}
        type='text'
        name='author'
      />
      <input type='submit' className='ui submit' value={label} />
      {
        (!pristine && !submitting) &&
        <button className='ui button' onClick={reset}>Clear</button>
      }
    </form>
  </div>
);

FormPost.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  label: PropTypes.string
};

export default FormPost;
