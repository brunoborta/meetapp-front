import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  border-radius: 4px;

  label {
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      height: 100%;
    }

    svg {
      margin-bottom: 10px;
    }

    span {
      color: #999;
      font-size: 16px;
      font-weight: bold;
    }

    input {
      display: none;
    }
  }
`;
