import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;

  ul {
    padding-bottom: 10px;
  }
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

export const Meetup = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    height: 62px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    strong {
      color: white;
      font-size: 18px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      time {
        font-size: 16px;
        color: #999;
      }

      svg {
        margin-left: 30px;
      }
    }
  }
  & + li {
    margin-top: 10px;
  }
`;
