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
    input,
    textarea {
      width: 100%;
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      color: white;
      padding: 15px 20px;
      margin-bottom: 10px;
    }

    textarea {
      resize: none;
      height: 150px;
    }

    input {
      height: 50px;
    }

    button {
      margin-top: 5px;
      margin-bottom: 10px;
      align-self: flex-end;
    }
    /* Divs criadas pelo datePicker */
    div.react-datepicker__input-container {
      width: 100%;
    }
  }
`;
