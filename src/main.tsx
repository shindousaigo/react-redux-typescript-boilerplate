import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
// import { App } from './app';
import { LoginPage } from 'app/components/Login'
import { observable } from 'mobx';

var appState = observable({
  timer: 0
})

setTimeout(function(){
  appState.timer = 2
}, 2000)

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

export let Main = ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoginPage states={{ widthMode: 'xs' }} appState={appState} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

