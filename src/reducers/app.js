import { createReducer } from '../helpers/redux';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../actions';

const initialState = {
  isFetching: false,
  error: null,
};

const reducers = {
  [ FETCH_USER_REQUEST ]: (state, { isFetching }) => ({ isFetching }),
  [ FETCH_USER_SUCCESS ]: (state, { isFetching }) => ({ isFetching }),
  [ FETCH_USER_FAIL ]: (state, { isFetching, error }) => ({ isFetching, error }),
};

export const app = createReducer(reducers, initialState);
