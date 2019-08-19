import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
`;

export const Content = styled.div`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;

    button {
      margin-left: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-between;

  strong {
    color: white;
  }

  a {
    color: #999;
    transition: color 1s;
    &:hover {
      color: ${darken(0.1, '#999')};
    }
  }
`;
