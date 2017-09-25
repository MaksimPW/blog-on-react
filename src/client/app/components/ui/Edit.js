import React from 'react';
import PropTypes from 'prop-types';

import FormPost from './../elements/FormPost';

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
      <FormPost
        label='Update'
        handleSubmit={handleSubmit}
        pristine={pristine}
        submitting={submitting}
        reset={reset}
      />
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
