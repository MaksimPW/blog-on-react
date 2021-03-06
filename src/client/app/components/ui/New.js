import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import FormPost from './../elements/FormPost';

const NewPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <FormPost
      label='Create'
      handleSubmit={handleSubmit}
      pristine={pristine}
      submitting={submitting}
      reset={reset}
    />
    <Helmet title="Создать новый пост" >
      <meta name="keywords" content="новый пост автор" />
      <meta name="description" content="Создание нового поста" />
    </Helmet>
  </div>
);

NewPostView.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
};

export default NewPostView;
