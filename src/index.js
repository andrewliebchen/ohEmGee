require('normalize.css/normalize.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/Main';
import SimDesk from './projects/simDesk/Main';
import Cube from './projects/cube/Main';
import Bike from './projects/bike/Main';

import styles from './styles/Global.scss'; // eslint-disable-line

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="simDesk" component={SimDesk}/>
      <Route path="cube" component={Cube}/>
      <Route path="bike" component={Bike}/>
    </Router>
  ), document.getElementById('root')
);
