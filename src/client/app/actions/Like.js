import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

export const errorLikePost = () => ({
  type: likeTypes.FETCH_LIKE_POST_ERROR
});

export const receiveLikePost = (res) => ({
  type: likeTypes.FETCH_LIKE_POST_SUCCESS,
  res
});
