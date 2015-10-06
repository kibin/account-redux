import { Sidebar } from '../components';

export class App extends React.Component {
  render() {
    let { children } = this.props;

    return (
      <div>
        <Sidebar />

        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}
