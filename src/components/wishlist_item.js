export class WishlistItem extends React.Component {
  render() {
    let { isChecked, data, onToggle, onRemove } = this.props;

    return (
      <div className="wishlist-item" style={{ backgroundColor: isChecked ? '#aaa' : '#fff' }}>
        <label>
          <input type="checkbox" onChange={onToggle(data.sku)} checked={isChecked} />
        </label>

        <div className="wishlist-item-image" style={{
          backgroundImage: `url(${data.image})`
        }} />

        <div className="wishlist-item-shortdesc">
          <b>{data.brand}</b>
          <p>{data.name}</p>
          <button onClick={onRemove(data.sku)}>Remove</button>
        </div>

        <div className="wishlist-item-fulldesc">
          <p>quantity: {data.qty}</p>
          <p>colour: {data.color}</p>
          <p>size: {data.size}</p>
        </div>

        <div className="wishlist-item-controls">
          <b>{data.price}</b>
          <button>Add to basket</button>
        </div>
      </div>
    );
  }
}
