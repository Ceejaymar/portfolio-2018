import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';

class Routes extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </App>
      </Router>
    )
  }
}

export default Routes;