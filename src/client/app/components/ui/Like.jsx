import React from 'react';
import PropTypes from 'prop-types';

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.renderLike()
    );
  }

  renderLike() {
    const { likeAdd, count, postId } = this.props;
    return (
      <div>
        <button
          className='like'
          onClick={ () => likeAdd(postId) }>
            Like {count}
        </button>
      </div>
    );
  }
}

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number,
  likeAdd: PropTypes.func.isRequired,
  postId: PropTypes.number,
};

export default Like;
