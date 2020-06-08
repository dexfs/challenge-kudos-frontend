import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from '~/services/history';

import Route from './Route';
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} isPrivate />
        <Route path="/login" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
