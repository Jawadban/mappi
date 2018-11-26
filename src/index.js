/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { browserHistory, hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

require('./favicon.ico'); // Tell webpack to load favicon.ico
require('./assets/img/rovrBackground.png');
require('./assets/img/rovrIcon.png');
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/mui.min.css';
import 'roboto-npm-webfont';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../tools/reducers/initialReducer'

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#007dc6",
    primary2Color: "#007dc6",
    primary3Color: "#007dc6",
    accent1Color: "#78be23",
    accent2Color: "#78be23",
    accent3Color: "#78be23"
  },
  appBar: {
    height: 50,
    },
  });

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppContainer>
      <Provider >
        <Root store={store} history={hashHistory} />
      </Provider>
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContainer>
          <NewRoot store={store} history={hashHistory} />
        </AppContainer>
      </MuiThemeProvider>,
      document.getElementById('app')
    );
  });
}
