import { createReducer } from '../helpers/redux';
import { wishlistInitialState, wishlistReducers } from './wishlist';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  wishlist: wishlistInitialState,
  details: {}
};

const reducers = {
  [ FETCH_USER_REQUEST ]: (state, { isFetching }) => ({ isFetching }),
  [ FETCH_USER_SUCCESS ]: (state, { isFetching, data }) => ({
    isFetching,
    wishlist: {
      amount: R.compose(
        R.length,
        R.prop('wishlistItems')
      )(data),
      items: R.compose(
        R.map((item) => ({ isChecked: false, data: item })),
        R.prop('wishlistItems')
      )(data)
    },
    details: R.omit(['wishlistItems'], data)
  }),
  [ FETCH_USER_FAIL ]: (state, { isFetching, error }) => ({ isFetching, error }),

  ...wishlistReducers
};

export const app = createReducer(reducers, initialState);
