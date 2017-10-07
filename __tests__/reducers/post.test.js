import reducer from '../../src/client/app/reducers/Post';
import * as types from '../../src/client/app/constants/actionTypes/PostActionTypes';


describe('Post reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isFetching: false,
      error: false,
      entry: null
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_POST_REQUEST', () => {
    const fetchingState = {
      isFetching: true,
      error: false,
      entry: null
    };

    expect(reducer(undefined, {
      type: types.FETCH_POST_REQUEST
    })).toEqual(fetchingState);
  });
});
