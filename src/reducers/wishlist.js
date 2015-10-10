import { createReducer } from '../helpers';
import {
  WISHLIST_ITEMS_RECEIVED,
  TOGGLE_WISHLIST_ITEMS,
  REQUEST_REMOVE_ITEMS, REQUEST_REMOVE_ITEMS_SUCCESS, REQUEST_REMOVE_ITEMS_FAIL,
  REQUEST_ADD_TO_BASKET, REQUEST_ADD_TO_BASKET_SUCCESS, REQUEST_ADD_TO_BASKET_FAIL,
  EMAIL_WISHLIST_REQUEST, EMAIL_WISHLIST_REQUEST_SUCCESS, EMAIL_WISHLIST_REQUEST_FAIL
} from '../actions';

const initialState = {
  items: [],
  allChecked: false
};

const reducers = {
  [ WISHLIST_ITEMS_RECEIVED ]: (state, { items }) => ({
    items: items.map((item) => ({ isChecked: false, data: item }))
  }),

  [ TOGGLE_WISHLIST_ITEMS ]: (state, { toggle, sku }) => {
    let items = state.items.map(item => {
      let check = R.assoc('isChecked', toggle);

      return !sku || sku == item.data.sku ? check(item) : item;
    });

    return {
      allChecked: items.every(R.prop('isChecked')),
      items
    }
  },

  [ REQUEST_REMOVE_ITEMS ]: (state, { requestingAddToBasket }) => ({ requestingAddToBasket }),
  [ REQUEST_REMOVE_ITEMS_FAIL ]:
    (state, { requestingAddToBasket, error }) => ({ requestingAddToBasket, error }),
  [ REQUEST_REMOVE_ITEMS_SUCCESS ]: (state, { skus, requestingAddToBasket }) => ({
    items: R.reject(
      R.compose(R.partialRight(R.contains, skus), R.path(['data', 'sku'])),
      state.items
    ),
    requestingAddToBasket
  }),

  [ EMAIL_WISHLIST_REQUEST ]: (state, { requestingEmail }) => ({ requestingEmail }),
  [ EMAIL_WISHLIST_REQUEST_FAIL ]:
    (state, { requestingEmail, error }) => ({ requestingEmail, error }),
  [ EMAIL_WISHLIST_REQUEST_SUCCESS ]: (state, { requestingEmail }) => ({ requestingEmail })
};

export const wishlist = createReducer(reducers, initialState);
