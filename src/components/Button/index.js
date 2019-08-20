import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

function ButtonWrapper({ color, type, children, onClick }) {
  return (
    <Button color={color} type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

ButtonWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonWrapper.defaultProps = {
  color: '#f94d6a',
  onClick: () => {},
};
export default ButtonWrapper;
