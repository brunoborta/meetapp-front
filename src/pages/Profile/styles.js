import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
  padding: 0 15px;

  h1 {
    color: white;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 50px;
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      color: white;
      padding: 15px 20px;
      margin-bottom: 10px;
    }

    hr {
      border: 0;
      height: 1px;
      margin: 25px 0px 15px;
      background: rgba(0, 0, 0, 0.2);
    }

    button {
      margin-top: 5px;
      margin-bottom: 10px;
      align-self: flex-end;
    }

    span {
      color: #f94d6a;
      text-align: left;
      margin-bottom: 5px;
    }
  }
`;
