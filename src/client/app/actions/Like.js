import * as types from './../constants/actionTypes/LikeActionTypes';
import Api from './../helpers/Api';
import { API_CALL } from './../middleware/API';

export function fetchLikePost(id) {
  return {
    [API_CALL]: {
      endpoint: Api.addLike.endpoint(id),
      method: Api.addLike.method,
      query: {},
      types: [
        types.FETCH_LIKE_POST_REQUEST,
        types.FETCH_LIKE_POST_SUCCESS,
        types.FETCH_LIKE_POST_ERROR
      ]
    }
  };
}
