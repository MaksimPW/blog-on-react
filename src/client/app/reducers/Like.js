import { assign } from 'lodash';

import * as types from './../constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  likes: 0
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch(action.type) {
    case types.FETCH_LIKE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_LIKE_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_LIKE_POST_SUCCESS:
      return assign({}, state, { likes: action.res });
    default:
      return state;
  }
}
