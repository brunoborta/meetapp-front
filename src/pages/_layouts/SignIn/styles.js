import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  background: linear-gradient(#22202c, #402845);
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  padding: 0 15px;

  img {
    width: 42px;
    height: 42px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      margin: 5px 0;
      height: 50px;
      color: white;
      padding-left: 15px;
      border-radius: 4px;
    }

    button {
      text-align: center;
      height: 50px;
      background: #f94d6a;
      color: white;
      margin: 10px 0;
      border-radius: 4px;
      border: 0;
      font-weight: bold;

      &:hover {
        background: ${darken(0.07, '#f94d6a')};
      }

      svg {
        animation: ${spin} 0.7s linear infinite;
      }
    }

    span {
      text-align: left;
      color: ${lighten(0.05, '#f94d6a')};
    }

    a {
      color: white;
    }
  }
`;
