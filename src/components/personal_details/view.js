import { Link } from 'react-router'

export class DetailsView extends React.Component {
  static defaultProps = {
    dob: '',
    telephone: ''
  }

  render() {
    let {
      gender, firstName, lastName,
      email, dob, telephone,
      address = {}
    } = this.props;

    return (
      <div className="details-view">
        <div className="details-info">
          <div className="details-block">
            <div className="details-title">
              <b>E-mailadres</b>
            </div>

            <div className="details-data">{email}</div>
          </div>

          <div className="details-block">
            <div className="details-title">
              <b>Factuuradres</b>
            </div>

            <div className="details-data">
              {`${firstName} ${lastName}, ${gender}`}<br />
              {`${address.street}, ${address.number}`}<br />
              {`${address.city}, ${address.postcode}`}<br />
              {`${address.country || ''}`}
            </div>
          </div>

          {telephone &&
            <div className="details-block">
              <div className="details-title">
                <b>Telefoonnummer</b>
              </div>

              <div className="details-data">{this.props.telephone}</div>
            </div>
          }

          <div className="details-block">
            <div className="details-title">
              <b>Geboortedatum</b>
            </div>

            <div className="details-data">
              {this.props.dob.split('-').reverse().join('/')}
            </div>
          </div>
        </div>

        <Link to="/details/edit"><button className="details-button details-button_edit">Wizigen</button></Link>
      </div>
    );
  }
}
