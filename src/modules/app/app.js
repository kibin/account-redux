import { connect } from 'react-redux'

import { Sidebar, fetchUser, ConnectedDetails } from './'

import 'styles/common.styl'

export class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let { children, isFetching } = this.props;
    let loader = `Loading...`;

    return (
      <div>
        <Sidebar />

        <div className='content'>
          {isFetching ? loader : children}
        </div>
      </div>
    );
  }
}

export const ConnectedApp = connect(
  R.prop(`app`),
  (dispatch) => ({
    dispatch,
    fetchUser() { dispatch(fetchUser()) },
  }),
)(App)
