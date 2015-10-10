import { ajax } from '../helpers'
import { wishlistItemsReceived } from './wishlist'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
    isFetching: true
  };
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export function fetchUserSuccess() {
  return {
    type: FETCH_USER_SUCCESS,
    isFetching: false,
  };
}

export const FETCH_USER_FAIL = 'FETCH_USER_FAIL'
export function fetchUserFail(error) {
  return {
    type: FETCH_USER_FAIL,
    isFetching: false,
    error
  };
}

export function onFetchSuccess(data) {
  return (dispatch, getState) => {
    dispatch(fetchUserSuccess());

    dispatch(wishlistItemsReceived(data.wishlistItems))
  }
}

export function fetchUser(username) {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    ajax('/api/user', { username })
      .then(R.compose(dispatch, onFetchSuccess))
      .catch(R.compose(dispatch, fetchUserFail));
  };
}
