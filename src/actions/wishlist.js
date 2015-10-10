import { ajax } from '../helpers'

export const WISHLIST_ITEMS_RECEIVED = 'WISHLIST_ITEMS_RECEIVED'
export function wishlistItemsReceived(items) {
  return {
    type: WISHLIST_ITEMS_RECEIVED,
    items
  };
}

export const TOGGLE_WISHLIST_ITEMS = 'TOGGLE_WISHLIST_ITEMS'
export function toggleWishlistItems(state, sku) {
  return {
    type: TOGGLE_WISHLIST_ITEMS,
    toggle: state,
    sku
  };
}

export const REQUEST_REMOVE_ITEMS = 'REQUEST_REMOVE_ITEMS'
export function requestRemoveItems() {
  return {
    type: REQUEST_REMOVE_ITEMS,
    requestRemove: true
  };
}

export const REQUEST_REMOVE_ITEMS_SUCCESS = 'REQUEST_REMOVE_ITEMS_SUCCESS'
export function requestRemoveItemsSuccess(skus) {
  return {
    type: REQUEST_REMOVE_ITEMS_SUCCESS,
    requestRemove: false,
    skus
  };
}

export const REQUEST_REMOVE_ITEMS_FAIL = 'REQUEST_REMOVE_ITEMS_FAIL'
export function requestRemoveItemsFail(error) {
  return {
    type: REQUEST_REMOVE_ITEMS_FAIL,
    requestRemove: false,
    error
  };
}

export function removeWishlistItems(sku) {
  return (dispatch, getState) => {
    dispatch(requestRemoveItems());

    let skus = [].concat(sku || R.compose(
      R.map(R.path(['data', 'sku'])),
      R.path(['wishlist', 'items'])
    )(getState()));

    ajax('/api/remove', { skus })
      .then((response) => {
        if (response.success) {
          dispatch(requestRemoveItemsSuccess(skus));
        }
      })
      .catch(R.compose(dispatch, requestRemoveItemsFail));
  };
}
