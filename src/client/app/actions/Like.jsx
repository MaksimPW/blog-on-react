import request from 'superagent';

import Api from './../helpers/Api';
import * as types from './../constants/actionTypes/LikeActionTypes';

const requestLikePost = (id) => ({
  type: types.FETCH_LIKE_POST_REQUEST,
  id
});

const errorLikePost = () => ({
  type: types.FETCH_LIKE_POST_ERROR
});

const receiveLikePost = (res) => ({
  type: types.FETCH_LIKE_POST_SUCCESS,
  res
});

export function fetchLikePost(id) {
  return (dispatch) => {
    dispatch(requestLikePost(id));
    console.log('fetchLikePost');
    return request
      .patch(Api.addLike(id))
      .end((err, res) => {
        err ? dispatch(errorLikePost()) : dispatch(receiveLikePost(res.body.likes));
      });
  };
}
