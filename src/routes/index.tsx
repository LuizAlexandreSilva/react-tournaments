import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Welcome from '../pages/Welcome';
import SearchTournaments from '../pages/SearchTournaments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/search-tournaments" component={SearchTournaments} />
  </Switch>
);

export default Routes;
