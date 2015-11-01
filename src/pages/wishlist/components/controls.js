export class WishlistControls extends React.Component {
  render() {
    let {
      onToggle,
      onAddToBasket,
      onRemove,
      onEmailWishlist,
      allChecked
    } = this.props;

    return (
      <div className='wishlist-controls'>
        <label className='wishlist-label'>
          <input type='checkbox' checked={allChecked} onChange={onToggle()} /> Select All
        </label>

        <button className='wishlist-button' onClick={onAddToBasket()}>
          Add selected to basket
        </button>

        <button className='wishlist-link' onClick={onRemove()}>
          Remove all items
        </button>

        <button className='wishlist-button' onClick={onEmailWishlist}>
          Email wishlist
        </button>
      </div>
    );
  }
}
