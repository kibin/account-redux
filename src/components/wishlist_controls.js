export class WishlistControls extends React.Component {
  render() {
    return (
      <div className="wishlist-controls">
        <label className="wishlist-label">
          <input type="checkbox" /> Select All
        </label>

        <button className="wishlist-button">
          Add selected basket button
        </button>

        <button className="wishlist-link">
          Remove all items
        </button>

        <button className="wishlist-button">
          Email wishlist
        </button>
      </div>
    );
  }
}
