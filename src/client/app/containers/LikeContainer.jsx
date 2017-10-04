import { connect } from 'react-redux';
import Like from './../components/ui/Like';

import _ from 'lodash';

import { fetchLikePost } from './../actions/Like';

const countLikesProps = (state, props) => {
  const entries = _.cloneDeep(state.posts.entries);

  if (entries == null || entries.length == 0) {
    return state.post.entry.likes;
  } else {
    const index = _.findIndex(entries, post => post.id == props.postId);
    return _.get(entries[index], 'likes', 0);
  }
};

const stateToProps = (state, props) => ({
  error: state.post.error,
  posts: state.posts.entries,
  count: countLikesProps(state, props)
});

const actionsToProps = (dispatch) => ({
  likeAdd(postId) {
    return dispatch(fetchLikePost(postId));
  }
});

const mergeProps = (stateToProps, actionsToProps, props) => (
  _.assign(
    {},
    stateToProps,
    {likeAdd: () => actionsToProps.likeAdd(props.postId)}
  )
);

export default connect(stateToProps, actionsToProps, mergeProps)(Like);
