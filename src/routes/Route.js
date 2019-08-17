import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignInLayout from '../pages/_layouts/SignIn';
import LoggedLayout from '../pages/_layouts/Logged';

import store from '~/store';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? LoggedLayout : SignInLayout;

  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
