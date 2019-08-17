import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

function SignIn({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

SignIn.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SignIn;
