import { Link } from 'react-router';

import './sidebar.styl';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Link className="sidebar-link" to="/details">
          Persoonlijke gegevens
        </Link>

        <Link className="sidebar-link" to="/wishlist">
          Verlanglijst
        </Link>
      </div>
    );
  }
}
