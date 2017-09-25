import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormField =
  ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={classNames('ui field', { error })}>
      <label>{label}</label>
      <input className='ui input' {...input} type={type} />
      {
        touched && (
          error && (
            <div className='ui red label'>{error}</div>
          ) || (
            warning && (
              <div className='ui yellow label'>{warning}</div>
            )
          )
        )
      }
    </div>
  );

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default FormField;
