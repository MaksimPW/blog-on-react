import _ from 'lodash';

import * as types from './../constants/actionTypes/PostActionTypes';
import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return _.assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return _.assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return _.assign({}, initialState, { entry: action.res });

    case likeTypes.FETCH_LIKE_POST_ERROR:
      return _.assign({}, initialState, { error: true });
    case likeTypes.FETCH_LIKE_POST_SUCCESS:
      return setStateLike(state, action);

    default:
      return state;
  }
}

const setStateLike = (state, action) => {
  let entryUpdated = _.cloneDeep(state.entry);

  if (entryUpdated == null) {
    entryUpdated = action.res;
  } else if (entryUpdated.id == action.res.id) {
    entryUpdated.likes = action.res.likes;
  } else {
    entryUpdated = action.res;
  }

  return _.assign({}, initialState, { entry: entryUpdated });
};
