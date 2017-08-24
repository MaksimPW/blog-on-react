import request from 'superagent';

import Api from './../helpers/Api';
import * as types from './../constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (res) => ({
  type: types.FETCH_POSTS_SUCCESS,
  res
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(Api.index)
      .end((err, res) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(res.body));
      });
  };
}
