import styled from 'styled-components';

export const Container = styled.div`
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
`;
