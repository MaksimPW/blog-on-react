import * as types from './../constants/actionTypes/PostsActionTypes';
import Api from './../helpers/Api';
import { API_CALL } from './../middleware/API';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: Api.index.endpoint,
      method: Api.index.method,
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
