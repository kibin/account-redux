import { connect } from 'react-redux'

import { Sidebar } from '../components'
import { fetchUser } from '../actions'
import { ConnectedDetails } from './'

import '../styles/common.styl'

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let { children, isFetching } = this.props;
    let loader = 'Loading...';

    return (
      <div>
        <Sidebar />

        <div className="content">
          {isFetching ? loader : (children || <ConnectedDetails />)}
        </div>
      </div>
    );
  }
}

export const ConnectedApp = connect(
  R.prop('app'),
  (dispatch) => ({
    fetchUser() { dispatch(fetchUser()) },
    dispatch
  })
)(App)
