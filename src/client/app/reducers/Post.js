import { assign } from 'lodash';

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
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.res });

    case likeTypes.FETCH_LIKE_POST_ERROR:
      return assign({}, initialState, { error: true });
    case likeTypes.FETCH_LIKE_POST_SUCCESS:
      const checkType = action.res instanceof Array;
      if (checkType == false) {
        return assign({}, initialState, { entry: action.res });
      }

    default:
      return state;
  }
}
