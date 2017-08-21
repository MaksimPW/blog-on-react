import { connect } from 'react-redux';

import Like from './../components/ui/Like';
import { fetchLikePost } from './../actions/Post';

const actionsToProps = (dispatch, ownProps) => ({
  fetchLikePost: (id) => dispatch(fetchLikePost(id))
});

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

//const mergeProps = (stateProps, dispatchProps, ownProps) => (
//  Object.assign()
//);

export default connect(stateToProps, actionsToProps)(Like);
