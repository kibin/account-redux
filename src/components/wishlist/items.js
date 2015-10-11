import { WishlistControls, WishlistItem } from '../';

import './items.styl';

export class WishlistItems extends React.Component {
  render() {
    let { items, controls, allChecked } = this.props;
    let wishlistControls = <WishlistControls {...{ ...controls, allChecked }} />;

    return (
      <div className="wishlist-items">
        {wishlistControls}

        {items.map((props, key) =>
          <WishlistItem key={key} {...{ ...props, ...controls }} />
        )}

        {wishlistControls}
      </div>
    );
  }
}
