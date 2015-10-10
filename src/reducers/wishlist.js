import { createReducer } from '../helpers';
import {
  WISHLIST_ITEMS_RECEIVED,
  TOGGLE_WISHLIST_ITEMS,
  REQUEST_REMOVE_ITEMS,
  REQUEST_REMOVE_ITEMS_SUCCESS,
  REQUEST_REMOVE_ITEMS_FAIL
} from '../actions';

const initialState = {
  items: [],
  amount: 0
};

const reducers = {
  [ WISHLIST_ITEMS_RECEIVED ]: (state, { items }) => ({
    items: items.map((item) => ({ isChecked: false, data: item })),
    amount: items.length
  }),
  [ TOGGLE_WISHLIST_ITEMS ]: (state, { toggle, sku }) => ({
    items: state.items.map((item) => {
      let remove = R.assoc('isChecked', toggle);

      return !sku || sku == item.data.sku ? remove(item) : item;
    })
  }),
  [ REQUEST_REMOVE_ITEMS ]: (state, { requestRemove }) => ({ requestRemove }),
  [ REQUEST_REMOVE_ITEMS_FAIL ]: (state, { requestRemove, error }) => ({ requestRemove, error }),
  [ REQUEST_REMOVE_ITEMS_SUCCESS ]: (state, { skus, requestRemove }) => ({
    items: R.reject(
      R.compose(R.partialRight(R.contains, skus), R.path(['data', 'sku'])),
      state.items
    ),
    requestRemove
  })
};

export const wishlist = createReducer(reducers, initialState);
