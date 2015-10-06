import { WishlistControls, WishlistItem } from './';

export class WishlistItems extends React.Component {
  render() {
    let { items } = this.props;

    return (
      <div className="wishlist-items">
        <WishlistControls />

        {items.map((props) => <WishlistItem {...props} />)}

        <WishlistControls />
      </div>
    );
  }
}
