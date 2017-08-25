import * as types from './../constants/actionTypes/PostActionTypes';
import Api from './../helpers/Api';
import { API_CALL } from './../middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: Api.show.endpoint(id),
      method: Api.show.method,
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}
