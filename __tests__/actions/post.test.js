import * as actions from '../../src/client/app/actions/Post';
import * as types from '../../src/client/app/constants/actionTypes/PostActionTypes';
import Api from '../../src/client/app/helpers/Api';
import { API_CALL } from '../../src/client/app/middleware/API';

describe('Post actions', () => {
  it('should fetchPost', () => {
    const postId = 2;

    const fetchPostAction = {
      [API_CALL]: {
        endpoint: Api.show.endpoint(postId),
        method: Api.show.method,
        query: {},
        types: [
          types.FETCH_POST_REQUEST,
          types.FETCH_POST_SUCCESS,
          types.FETCH_POST_ERROR
        ]
      }
    };

    expect(actions.fetchPost(postId)).toEqual(fetchPostAction);
  });
});
