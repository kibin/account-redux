import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from './reducers'
import routes from './routes'

const history = createBrowserHistory();
const logger = createLogger();
const state = combineReducers(reducers);
const store = applyMiddleware(thunk, logger)(createStore)(state);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('content')
);
