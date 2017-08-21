import { connect } from 'react-redux';

import BlogPage from './../components/containers/BlogPage';
import { fetchPosts, fetchLikePosts } from './../actions/Posts';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionsToProps = (dispatch) => ({
  likeAdd(postId, posts) {
    dispatch(fetchLikePosts(postId, posts));
  }
});

export default connect(stateToProps, actionsToProps)(BlogPage);
