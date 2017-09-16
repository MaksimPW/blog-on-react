import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';

const renderField =
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

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};


class EditPostView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, isFetching } = this.props;
    return (
      !isFetching && post && this.renderEdit()
    );
  }

  renderEdit() {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <div>
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit} className='ui form'>
          <Field
            label='Title'
            component={renderField}
            type='text'
            name='title'
          />
          <Field
            label='Author'
            component={renderField}
            type='text'
            name='author'
          />
          {
            (!pristine && !submitting) &&
            <button className='ui button' onClick={reset}>Clear</button>
          }
          <input type='submit' className='ui submit' value='Update' />
        </form>
      </div>
    );
  }
}

EditPostView.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  post: PropTypes.object,
  isFetching: PropTypes.bool
};

export default EditPostView;
