export class DetailsView extends React.Component {
  render() {
    console.log('DetailsView >>>', this.props);

    return (
      <div className="details-view">
        <div className="details-info">
          <div className="details-block">
            <div className="details-title">
              <b>Factuuradres</b>
            </div>

            <div className="details-data">

            </div>
          </div>
          <div className="details-block">
            <div className="details-title">
              <b>Telefoonnummer</b>
            </div>

            <div className="details-data">{this.props.telephone}</div>
          </div>
          <div className="details-block">
            <div className="details-title">
              <b>Geboortedatum</b>
            </div>

            <div className="details-data">
              {this.props.dob.split('-').reverse().join('/')}
            </div>
          </div>
        </div>

        <button className="details-button details-button_edit">Wizigen</button>
      </div>
    );
  }
}
