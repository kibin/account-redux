import { connect } from 'react-redux';

import { WishlistHeader, WishlistItems } from '../components';
import { wishlistItemsReceived, toggleWishlistItems } from '../actions';

export class Wishlist extends React.Component {
  componentWillReceiveProps(nextProps) {
    let { data } = nextProps;

    if (data && this.props.data != data) this.props.onItemsReceive(data.wishlistItems);
  }

  render() {
    let { items, amount } = this.props;

    return (
      <div>
        <WishlistHeader amount={amount} />

        <WishlistItems items={items} />
      </div>
    );
  }
}

export const ConnectedWishlist = connect(
  ({ wishlist }) => wishlist,
  (dispatch) => ({
    onItemsReceive(items) { dispatch(wishlistItemsReceived(items)) },
    controls: {
      onToggle(evt) { dispatch(toggleWishlistItems(evt.target.checked)) }
    },
    dispatch
  })
)(Wishlist);
