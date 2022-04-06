import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;

  .content {
    margin-top: 10vh;
    width: 90%;
    padding: 20px;
    max-width: 1100px;
  }
  .search-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-search-container,
  .title-details-container {
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
  .details-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    width: 100%;
  }
  .components-details-container {
    width: 70%;
    height: 380px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .subtitle-details-container {
    font-size: 17px;
  }
  .text-details-container {
    width: 90%;
    margin-bottom: 20px;
  }
  .actor-details-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
  }
  .poster-details-container {
    width: 30%;
  }
`;
