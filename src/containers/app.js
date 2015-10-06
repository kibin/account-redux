import { connect } from 'react-redux';

import { Sidebar } from '../components';
import { fetchUser } from '../actions';

import '../styles/common.styl';

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let { children, isFetching } = this.props;
    let childKey = this.props.location.pathname.slice(1);
    let loader = 'Loading...';

    return (
      <div>
        <Sidebar />

        <div className="content">
          {isFetching ?
            loader :
            children && React.cloneElement(children, {
              data: this.props[childKey],
              ...children.props
            })}
        </div>
      </div>
    );
  }
}

export const ConnectedApp = connect(
  ({ app }) => ({
    wishlist: app.wishlist,
    details: app.details
  }),
  (dispatch) => ({
    fetchUser() { dispatch(fetchUser()) },
    dispatch
  })
)(App);
