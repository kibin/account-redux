import { connect } from 'react-redux';

import { WishlistHeader } from '../components';

export class Wishlist extends React.Component {
  render() {
    let { children } = this.props;

    return (
      <div>
        <WishlistHeader />
      </div>
    );
  }
}

export default connect(({ wishlist }) => {
  return wishlist;
})(Wishlist);
