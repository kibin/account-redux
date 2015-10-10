import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { app } from './reducers';
import { ConnectedApp, ConnectedWishlist, ConnectedDetails } from './containers';

const history = createBrowserHistory();
// For this app I will be logging everything
// even in “production” so users can track
// application flow in their consoles easier.
const logger = createLogger();
const state = combineReducers({ app });
const store = applyMiddleware(thunk, logger)(createStore)(state);

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path="/" component={ConnectedApp}>
          <Route path="wishlist" component={ConnectedWishlist} />
          <Route path="details" component={ConnectedDetails} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('content'));
