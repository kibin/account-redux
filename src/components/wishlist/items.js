import { WishlistControls, WishlistItem } from '../';

import './items.styl';

export class WishlistItems extends React.Component {
  render() {
    let { items, controls, allChecked } = this.props;
    let wishlistControls = <WishlistControls {...{ ...controls, allChecked }} />;
    let noItems = 'No items to show here.';

    return (
      <div className="wishlist-items">
        {wishlistControls}

        {R.ifElse(
          R.length,
          R.map((props) => <WishlistItem key={props.data.sku} {...{ ...props, ...controls }} />),
          R.always(noItems)
        )(items)}

        {wishlistControls}
      </div>
    );
  }
}
