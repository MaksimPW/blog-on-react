import request from 'superagent';

import Api from './../helpers/Api';
import * as types from './../constants/actionTypes/PostsActionTypes';
import * as likeTypes from './../constants/actionTypes/LikeActionTypes';

import _ from 'lodash';

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

const errorLikePosts = () => ({
  type: likeTypes.FETCH_LIKE_POSTS_ERROR
});

const receiveLikePosts = (res) => ({
  type: likeTypes.FETCH_LIKE_POSTS_SUCCESS,
  res
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

export function fetchLikePosts(id, posts) {
  return (dispatch) => request
    .patch(Api.addLike(id))
    .end((err, res) => {
      const entries = _.cloneDeep(posts);
      const index = _.findIndex(posts, post => post.id == id);

      entries[index].likes = res.body.likes;
      err ? dispatch(errorLikePosts()) : dispatch(receiveLikePosts(entries));
    });
}
