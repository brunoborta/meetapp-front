import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

function Logged({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Logged.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Logged;
