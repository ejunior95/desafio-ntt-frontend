import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 10px 5px 5px rgba(0,0,0,0.5);

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
`;
