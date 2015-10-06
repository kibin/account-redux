import { ajax } from '../helpers'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
    isFetching: true
  };
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export function fetchUserSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    isFetching: false,
    data
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

export function fetchUser(username) {
  return (dispatch, getState) => {
    dispatch(fetchUserRequest());

    ajax('/api/user', { username })
      .then(R.compose(dispatch, fetchUserSuccess))
      .catch(R.compose(dispatch, fetchUserFail));
  };
}
