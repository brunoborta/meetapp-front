import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/SignIn';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';
import Meetup from '~/pages/Meetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:meetupId" exact component={Details} isPrivate />
      <Route path="/meetup/create" exact component={Meetup} isPrivate />
      <Route
        path="/meetup/:meetupId"
        component={props => <Meetup {...props} title="Editar Meetup" />}
        exact
        isPrivate
      />
      <Redirect exact to="/" />
    </Switch>
  );
}
