import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

import Api from './../helpers/Api';
import request from 'superagent';

export const errorLikePost = () => ({
  type: likeTypes.FETCH_LIKE_POST_ERROR
});

export const receiveLikePost = (res) => ({
  type: likeTypes.FETCH_LIKE_POST_SUCCESS,
  res
});

export function fetchLikePost(id) {
  return (dispatch) => request
    .patch(Api.addLike(id))
    .end((err, res) => {
      err ? dispatch(errorLikePost()) : dispatch(receiveLikePost(res.body));
    });
}
