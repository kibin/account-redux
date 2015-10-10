export const TOGGLE_WISHLIST_ITEMS = 'TOGGLE_WISHLIST_ITEMS'
export function toggleWishlistItems(state, sku) {
  return {
    type: TOGGLE_WISHLIST_ITEMS,
    toggle: state,
    sku
  };
}

export const REMOVE_WISHLIST_ITEMS = 'REMOVE_WISHLIST_ITEMS'
export function removeWishlistItems(sku) {
  return {
    type: REMOVE_WISHLIST_ITEMS,
    sku
  };
}
