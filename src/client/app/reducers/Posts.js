import _ from 'lodash';

import * as types from './../constants/actionTypes/PostsActionTypes';
import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return _.assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return _.assign({}, initialState, { entries: action.res });

    case likeTypes.FETCH_LIKE_POST_ERROR:
      return _.assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_POST_SUCCESS:
      return setStateLike(state, action);

    default:
      return state;
  }
}

const setStateLike = (state, action) => {
  const entriesUpdated = _.cloneDeep(state.entries);
  const index =
    _.findIndex(entriesUpdated, post => post.id == action.res.id);

  entriesUpdated[index].likes = action.res.likes;

  return _.assign({}, initialState, { entries: entriesUpdated });
};
