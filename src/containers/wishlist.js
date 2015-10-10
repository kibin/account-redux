import { connect } from 'react-redux';

import { WishlistHeader, WishlistItems } from '../components';
import {
  wishlistItemsReceived,
  toggleWishlistItems,
  removeWishlistItems
} from '../actions';

export class Wishlist extends React.Component {
  render() {
    let { items, amount, controls } = this.props;

    return (
      <div>
        <WishlistHeader amount={amount} />

        <WishlistItems controls={controls} items={items} />
      </div>
    );
  }
}

export const ConnectedWishlist = connect(
  R.prop('wishlist'),
  (dispatch) => ({
    onItemsReceive(items) { dispatch(wishlistItemsReceived(items)) },
    controls: {
      onToggle: R.curry((sku, evt) => dispatch(toggleWishlistItems(evt.target.checked, sku))),
      onRemove: (sku) => _ => dispatch(removeWishlistItems(sku))
    },
    dispatch
  })
)(Wishlist);
