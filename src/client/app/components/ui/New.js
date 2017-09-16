import React from 'react';
import PropTypes from 'prop-types';

import FormPost from './../elements/FormPost';

const NewPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <FormPost
    label='Create'
    handleSubmit={handleSubmit}
    pristine={pristine}
    submitting={submitting}
    reset={reset}
  />
);

NewPostView.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
};

export default NewPostView;
