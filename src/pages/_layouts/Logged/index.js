import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Container } from './styles';

function Logged({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

Logged.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Logged;
