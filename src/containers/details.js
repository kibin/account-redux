import { connect } from 'react-redux';

// import { } from '../actions'
import { DetailsHeader, DetailsView } from '../components'

export class Details extends React.Component {
  render() {
    let { children, details } = this.props;

    return (
      <div>
        <DetailsHeader />

        {<DetailsView {...details} /> || children}
      </div>
    );
  }
}

export const ConnectedDetails = connect(
  R.prop('details'),
  dispatch => ({
    dispatch
  })
)(Details);
