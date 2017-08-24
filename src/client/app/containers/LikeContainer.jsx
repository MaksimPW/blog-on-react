import { connect } from 'react-redux';
import Like from './../components/ui/Like';

import _ from 'lodash';

import { fetchLikePost } from './../actions/Post';
import { fetchLikePosts } from './../actions/Posts';

const countLikesProps = (state, props) => {
  switch (props.postType) {
    case 'Post':
      return state.post.entry.likes;
    case 'Posts':
      return countLikesEntries(state, props);
  }
};

const countLikesEntries = (state, props) => {
  const entries = _.cloneDeep(state.posts.entries);
  const index = _.findIndex(entries, post => post.id == props.postId);
  return entries[index].likes;
};

const stateToProps = (state, props) => ({
  error: state.post.error,
  posts: state.posts.entries,
  count: countLikesProps(state, props)
});

const actionsToProps = (dispatch) => ({
  likeAdd(postId, postType, posts) {
    switch (postType) {
      case 'Post':
        return dispatch(fetchLikePost(postId));
      case 'Posts':
        return dispatch(fetchLikePosts(postId, posts));
    }
  }
});

export default connect(stateToProps, actionsToProps)(Like);
