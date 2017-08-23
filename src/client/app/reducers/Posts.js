import { assign } from 'lodash';

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
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.res });

    case likeTypes.FETCH_LIKE_POST_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_POST_SUCCESS:
      return assign({}, initialState, { entries: action.res });

    default:
      return state;
  }
}
