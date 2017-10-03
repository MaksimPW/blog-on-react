import * as actions from '../../src/client/app/actions/Like';
import * as types from '../../src/client/app/constants/actionTypes/LikeActionTypes';
import Api from '../../src/client/app/helpers/Api';
import { API_CALL } from '../../src/client/app/middleware/API';

describe('Like actions', () => {
  it('should fetchLikePost', () => {
    const postId = 2;

    const fetchLikeAction = {
      [API_CALL]: {
        endpoint: Api.addLike.endpoint(postId),
        method: Api.addLike.method,
        query: {},
        types: [
          types.FETCH_LIKE_POST_REQUEST,
          types.FETCH_LIKE_POST_SUCCESS,
          types.FETCH_LIKE_POST_ERROR
        ]
      }
    };

    expect(actions.fetchLikePost(postId)).toEqual(fetchLikeAction);
  });
});
