import { connect } from 'react-redux';

// import { } from '../actions'
import { DetailsHeader, DetailsView } from '../components'

export class Details extends React.Component {
  render() {
    let { children, details } = this.props;
    let child = children && React.cloneElement(children, { ...children.props, ...details });

    return (
      <div>
        <DetailsHeader />

        {child || <DetailsView {...details} />}
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
