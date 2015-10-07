export class WishlistControls extends React.Component {
  render() {
    return (
      <div className="wishlist-controls">
        <label className="wishlist-label">
          <input type="checkbox" onChange={this.props.onToggle(null)} /> Select All
        </label>

        <button className="wishlist-button" onClick={this.props.onAddToBasket}>
          Add selected to basket
        </button>

        <button className="wishlist-link" onClick={this.props.onRemove(null)}>
          Remove all items
        </button>

        <button className="wishlist-button" onClick={this.props.emailWishlist}>
          Email wishlist
        </button>
      </div>
    );
  }
}
