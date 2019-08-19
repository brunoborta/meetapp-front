import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Loading = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 1s linear infinite;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;

  button {
    & + button {
      margin-left: 15px;
    }
  }
`;

export const Main = styled.main`
  img {
    width: 100%;
    margin-bottom: 25px;
  }

  p {
    color: white;
    font-size: 18px;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  padding-bottom: 10px;

  span {
    margin-left: 15px;
    color: #999;
    font-size: 16px;
  }
  div + div {
    margin-left: 30px;
  }
`;
