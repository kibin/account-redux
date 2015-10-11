import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from './reducers'
import routes from './routes'

const history = createBrowserHistory();
// For this app I will be logging everything
// even in “production” so users can track
// application flow in their consoles easier.
const logger = createLogger();
const state = combineReducers(reducers);
const store = applyMiddleware(thunk, logger)(createStore)(state);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

React.render(
  <Provider store={store}>
    {() => <Router history={history}>{routes}</Router>}
  </Provider>,
  document.getElementById('content')
);
