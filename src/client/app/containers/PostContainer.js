import { connect } from 'react-redux';

import Post from './../components/containers/Post';
import { fetchPost, fetchLikePost } from './../actions/Post';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const actionsToProps = (dispatch) => ({
  likeAdd(postId) {
    dispatch(fetchLikePost(postId));
  }
});

export default connect(stateToProps, actionsToProps)(Post);
