import { Link } from 'react-router'

import './sidebar.styl'

export class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <Link activeClassName='sidebar-link_active' className='sidebar-link' to='/details'>
          Persoonlijke gegevens
        </Link>

        <Link activeClassName='sidebar-link_active' className='sidebar-link' to='/wishlist'>
          Verlanglijst
        </Link>
      </div>
    );
  }
}
