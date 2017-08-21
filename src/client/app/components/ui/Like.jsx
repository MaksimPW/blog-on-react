import React from 'react';
import PropTypes from 'prop-types';

class Like extends React.Component {
  constructor(props) {
    super(props);
    // count, likeAdd, postId
  }

  render() {
    const { count, postId } = this.props;
    console.log(this.props);
    return (
      this.renderLike(count, postId)
    );
  }

  renderLike(count, postId) {
    return (
      <div>
        <button
          className='like'
          onClick={() => this.props.fetchLikePost(postId)}>
            Like {count}
        </button>
      </div>
    );
  };
}

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number,
  fetchLikePost: PropTypes.func.isRequired,
  postId: PropTypes.number
};

export default Like;
