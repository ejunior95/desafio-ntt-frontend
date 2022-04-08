import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #ffffff;
    width: 350px;

    input {
      border: none;
      background-color: transparent;
      outline: none;
      width: 92%;
      font-size: 15px;
    }
    .logo-search {
      color: #1a1a1a;
    }
  }
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #ffffff;
    width: 100%;

    input {
      border: none;
      background-color: transparent;
      outline: none;
      width: 90%;
      font-size: 15px;
    }
    .logo-search {
      color: #1a1a1a;
    }
  }
`;
