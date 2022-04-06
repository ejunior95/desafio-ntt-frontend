import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  .content {
    height: 90vh;
    margin-top: 10vh;
    width: 80%;
    padding: 20px;
    max-width: 1090px;
  }
  .search-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-search-container {
    margin-bottom: 10px;
    color: #F5C50C;
  }
  .text-search-container {
    text-align: center;
    font-size: 14px;
    width: 50%;
    margin-bottom: 20px;
  }
  .components-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
  }
`;
