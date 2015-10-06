import { createReducer } from '../helpers';
import { WISHLIST_ITEMS_RECEIVED, TOGGLE_WISHLIST_ITEM } from '../actions';

const initialState = {
  items: [],
  amount: 0
};

const actions = {
  [ WISHLIST_ITEMS_RECEIVED ]: (state, { items }) => ({
    items: items.map((item) => ({ isChecked: false, data: item })),
    amount: items.length
  }),
  [ TOGGLE_WISHLIST_ITEM ]: (state, { toggle }) => (console.log(state), {
    items: state.items.map(R.assoc('isChecked', state))
  })
};

export const wishlist = createReducer(actions, initialState);
