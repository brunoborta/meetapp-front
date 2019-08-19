import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/SignIn';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:meetupId" exact component={Details} isPrivate />
    </Switch>
  );
}
