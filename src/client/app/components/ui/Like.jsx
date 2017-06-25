import React from 'react';
import PropTypes from 'prop-types';

const Like = ({count, likeAdd, postId}) => (  
  <div>
    <button onClick={()=> likeAdd(postId)}>
      Like+
    </button>
      {count}
  </div>
)

Like.defaultProps = {
  count: 0
}

Like.propTypes = {
  count: PropTypes.number,
  likeAdd: PropTypes.func.isRequired,
  postId: PropTypes.number
}

export default Like;
