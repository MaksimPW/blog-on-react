import React from 'react';
import PropTypes from 'prop-types';

const Like = ({count, likeAdd, postId}) => (
  <div>
    <button className='like' onClick={() => likeAdd(postId)}>
      Like {count}
    </button>
  </div>
);

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number,
  likeAdd: PropTypes.func.isRequired,
  postId: PropTypes.number
};

export default Like;
