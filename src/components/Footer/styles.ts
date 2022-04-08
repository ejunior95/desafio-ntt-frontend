import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom: 0;
    left: 0;
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
  @media (min-width: 921px) and (max-width: 1199px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

    p {
      margin: 5px;
    }

    .icon-heart {
      color: red;
    }
  }
  @media (min-width: 421px) and (max-width: 920px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

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
