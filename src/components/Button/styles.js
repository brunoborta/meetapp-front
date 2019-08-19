import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 11px 20px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;

  background: ${props => (props.color ? props.color : '#f94d6a')};
  transition: background 1s;
  &:hover {
    background: ${props =>
      props.color ? darken(0.07, props.color) : darken(0.07, '#f94d6a')};
  }

  svg {
    margin-right: 15px;
    font-size: 12px;
    text-align: center;
  }
`;
