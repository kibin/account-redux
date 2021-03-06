import { connect } from 'react-redux'

import {
  WishlistHeader,
  WishlistItems,
  wishlistItemsReceived,
  toggleWishlistItems,
  removeWishlistItems,
  addWishlistItemsToBasket,
  emailWishlist,
} from './'

export class Wishlist extends React.Component {
  render() {
    return (
      <div>
        <WishlistHeader amount={R.length(this.props.items)} />

        <WishlistItems {...R.pick([`items`, `controls`, `allChecked`], this.props)} />
      </div>
    );
  }
}

export const ConnectedWishlist = connect(
  R.prop(`wishlist`),
  dispatch => ({
    dispatch,
    controls: {
      onToggle: sku => evt => dispatch(toggleWishlistItems(evt.target.checked, sku)),
      onRemove: sku => _ => dispatch(removeWishlistItems(sku)),
      onAddToBasket: sku => _ => dispatch(addWishlistItemsToBasket(sku)),
      onEmailWishlist: _ => dispatch(emailWishlist()),
    },
  })
)(Wishlist)
