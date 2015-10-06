import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import * as reducers from './reducers';
import { App, Wishlist, Details } from './containers';

const history = createBrowserHistory();
// For this app I will be logging everything
// even in “production” so users can track
// application flow in their consoles easier.
const logger = createLogger();
const state = combineReducers(reducers);
const store = compose(
  applyMiddleware(thunk, logger),
  devTools(),
  persistState(true)
)(createStore)(state);

React.render(
  <div>
    <Provider store={store}>
      {() =>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="wishlist" component={Wishlist} />
            <Route path="details" component={Details} />
          </Route>
        </Router>
      }
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('content'));
