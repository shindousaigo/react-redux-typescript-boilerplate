import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
// import { App } from './app';
import { LoginPage } from 'app/components/Login'

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

console.log(
  store.getState()
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoginPage />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
