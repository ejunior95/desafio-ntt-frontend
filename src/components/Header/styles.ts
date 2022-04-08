import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 100%;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);

    .app-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      width: 60px;
      margin: 10px;
    }
    .title {
      font-size: 30px;
      margin: 10px;
    }
  }
  @media (min-width: 921px) and (max-width: 1199px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);

    .app-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      width: 80px;
      margin: 10px;
    }
    .title {
      font-size: 40px;
      margin: 10px;
    }
  }
  @media (min-width: 421px) and (max-width: 920px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);

    .app-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      width: 60px;
      margin: 10px;
    }
    .title {
      font-size: 30px;
      margin: 10px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 10vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);

    .app-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      width: 60px;
      margin: 10px;
    }
    .title {
      font-size: 30px;
      margin: 10px;
    }
  }
`;
