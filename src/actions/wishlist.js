import { ajax } from '../helpers'


export const getItems = R.path(['wishlist', 'items'])
export const skusFromItems = R.map(R.path(['data', 'sku']))
export const getSkus = R.compose(skusFromItems, getItems)
export const getChecked = R.compose(
  skusFromItems,
  R.filter(R.prop('isChecked')),
  getItems
)

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
    let skus = [].concat(sku || getSkus(getState()));

    if (R.isEmpty(skus)) return;

    dispatch(requestRemoveItems());

    ajax('/api/remove', { skus })
      .then(({ success, removed } = {}) => {
        if (!success) return;

        dispatch(toggleWishlistItems(false));
        dispatch(requestRemoveItemsSuccess(removed));
      })
      .catch(R.compose(dispatch, requestRemoveItemsFail));
  };
}

export const REQUEST_ADD_TO_BASKET = 'REQUEST_ADD_TO_BASKET'
export function requestAddToBasket() {
  return {
    type: REQUEST_ADD_TO_BASKET,
    requestingAddToBasket: true
  };
}

export const REQUEST_ADD_TO_BASKET_SUCCESS = 'REQUEST_ADD_TO_BASKET_SUCCESS'
export function requestAddToBasketSuccess(skus) {
  return {
    type: REQUEST_ADD_TO_BASKET_SUCCESS,
    requestingAddToBasket: false,
    skus
  };
}

export const REQUEST_ADD_TO_BASKET_FAIL = 'REQUEST_ADD_TO_BASKET_FAIL'
export function requestAddToBasketFail(error) {
  return {
    type: REQUEST_ADD_TO_BASKET_FAIL,
    requestingAddToBasket: false,
    error
  };
}

export function addWishlistItemsToBasket(sku) {
  return (dispatch, getState) => {
    let skus = [].concat(sku || getChecked(getState()));

    if (R.isEmpty(skus)) return;

    dispatch(requestAddToBasket());

    ajax('api/add_to_basket', { skus })
      .then(({ success, added } = {}) => {
        success && dispatch(requestAddToBasketSuccess(added));
      })
      .catch(R.compose(dispatch, requestAddToBasketFail));
  };
}

export const EMAIL_WISHLIST_REQUEST = 'EMAIL_WISHLIST_REQUEST'
export function emailWishlistRequest() {
  return {
    type: EMAIL_WISHLIST_REQUEST,
    requestingEmail: true
  };
}

export const EMAIL_WISHLIST_REQUEST_SUCCESS = 'EMAIL_WISHLIST_REQUEST_SUCCESS'
export function emailWishlistRequestSuccess() {
  return {
    type: EMAIL_WISHLIST_REQUEST_SUCCESS,
    requestingEmail: false
  };
}

export const EMAIL_WISHLIST_REQUEST_FAIL = 'EMAIL_WISHLIST_REQUEST_FAIL'
export function emailWishlistRequestFail(error) {
  return {
    type: EMAIL_WISHLIST_REQUEST_FAIL,
    requestingEmail: false,
    error
  };
}

export function emailWishlist() {
  return (dispatch, getState) => {
    if (R.isEmpty(getSkus(getState()))) return;

    dispatch(emailWishlistRequest());

    ajax('api/email_wishlist')
      .then(({ success } = {}) => {
        success && dispatch(emailWishlistRequestSuccess());
      })
      .catch(R.compose(dispatch, emailWishlistRequestFail));
  }
}
