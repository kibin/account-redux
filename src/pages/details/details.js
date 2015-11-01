import { connect } from 'react-redux';

import { DetailsHeader, DetailsView } from './'

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
  R.prop(`details`),
  dispatch => ({
    dispatch,
  }),
)(Details);
