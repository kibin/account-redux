export const WISHLIST_ITEMS_RECEIVED = 'WISHLIST_ITEMS_RECEIVED'
export function wishlistItemsReceived(items) {
  return {
    type: WISHLIST_ITEMS_RECEIVED,
    items
  };
}

export const TOGGLE_WISHLIST_ITEMS = 'TOGGLE_WISHLIST_ITEMS'
export function toggleWishlistItems(state) {
  return {
    type: TOGGLE_WISHLIST_ITEM,
    toggle: state
  }
}
