import { createReducer } from '../helpers';
import {
  TOGGLE_WISHLIST_ITEMS,
  REMOVE_WISHLIST_ITEMS
} from '../actions';

export const wishlistInitialState = {
  items: [],
  amount: 0
};

export const wishlistReducers = {
  [ TOGGLE_WISHLIST_ITEMS ]: (state, { toggle, sku }) => ({
    items: state.items.map((item) => {
      let remove = R.assoc('isChecked', toggle);

      return !sku || sku == item.data.sku ? remove(item) : item;
    })
  }),
  [ REMOVE_WISHLIST_ITEMS ]: (state, { sku }) => ({
    items: sku ?
      R.reject((item) => item.data.sku == sku, state.items) :
      []
  })
};
