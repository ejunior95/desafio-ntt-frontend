import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;

    p {
      margin: 5px;
    }

    .icon-heart {
      color: red;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;

    p {
      margin: 5px;
    }

    .icon-heart {
      color: red;
    }
  }
`;
