import { connect } from 'react-redux';
import Like from './../components/ui/Like';

import { fetchLikePost } from './../actions/Post';
import { fetchLikePosts } from './../actions/Posts';

const stateToProps = (state) => ({
  error: state.post.error,
  posts: state.posts.entries
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
