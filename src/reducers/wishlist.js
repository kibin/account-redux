import { createReducer } from '../helpers';
import {
  WISHLIST_ITEMS_RECEIVED,
  TOGGLE_WISHLIST_ITEMS,
  REMOVE_WISHLIST_ITEMS
} from '../actions';

const initialState = {
  items: [],
  amount: 0
};

const actions = {
  [ WISHLIST_ITEMS_RECEIVED ]: (state, { items }) => ({
    items: items.map((item) => ({ isChecked: false, data: item })),
    amount: items.length
  }),
  [ TOGGLE_WISHLIST_ITEMS ]: (state, { toggle, sku }) => ({
    items: state.items.map((item) => {
      if (sku) {
        return (sku == item.data.sku) ?
          R.assoc('isChecked', toggle, item) :
          item;
      } else {
        return R.assoc('isChecked', toggle, item);
      }
    })
  }),
  [ REMOVE_WISHLIST_ITEMS ]: (state, { sku }) => ({
    items: sku ?
      R.reject((item) => item.data.sku == sku, state.items) :
      []
  })
};

export const wishlist = createReducer(actions, initialState);
