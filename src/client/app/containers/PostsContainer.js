import { connect } from 'react-redux';

import BlogPage from './../components/containers/BlogPage';
import { fetchPosts } from './../actions/Posts';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogPage);
