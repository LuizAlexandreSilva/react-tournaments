import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Welcome from '../pages/Welcome';
import SearchTournaments from '../pages/SearchTournaments';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/search-tournaments" component={SearchTournaments} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
