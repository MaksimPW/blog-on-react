import request from 'superagent';

import Api from './../helpers/Api';
import * as types from './../constants/actionTypes/PostActionTypes';
import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (res) => ({
  type: types.FETCH_POST_SUCCESS,
  res
});

const errorLikePost = () => ({
  type: likeTypes.FETCH_LIKE_POST_ERROR
});

const receiveLikePost = (res) => ({
  type: likeTypes.FETCH_LIKE_POST_SUCCESS,
  res
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(Api.show(id))
      .end((err, res) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(res.body));
      });
  };
}

export function fetchLikePost(id) {
  return (dispatch) => request
    .patch(Api.addLike(id))
    .end((err, res) => {
      err ? dispatch(errorLikePost()) : dispatch(receiveLikePost(res.body));
    });
}
