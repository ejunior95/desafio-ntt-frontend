import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;
    height: 100vh;

    .content {
      width: 80%;
      max-width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      color: #f5c50c;
    }
    .title-search-container {
      font-size: 28px;
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
      width: 100%;
    }
    .components-details-container {
      width: 70%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .subtitle-details-container {
      font-size: 17px;
      margin-right: 15px;
    }
    .text-details-container {
      width: 90%;
      margin-bottom: 20px;
    }
    .actor-details-container,
    .review-details-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .review-details-container {
      margin-bottom: 20px;
    }
    .poster-details-container {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: 921px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;

    .content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2vh;
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
      margin-bottom: 2vh;
      color: #f5c50c;
    }
    .title-search-container {
      font-size: 2.1rem;
      text-align: center;
    }
    .text-search-container {
      text-align: center;
      font-size: 20px;
      width: 90%;
    }
    .components-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 90%;
      height: 30vh;
    }
    .details-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
    .components-details-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .subtitle-details-container {
      font-size: 17px;
      margin-right: 15px;
    }
    .text-details-container {
      width: 90%;
      margin-bottom: 20px;
    }
    .actor-details-container,
    .review-details-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .review-details-container {
      margin-bottom: 20px;
    }
    .poster-details-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
  }
  @media (min-width: 421px) and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;

    .content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2vh;
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
      margin-bottom: 2vh;
      color: #f5c50c;
    }
    .title-search-container {
      font-size: 2.1rem;
      text-align: center;
    }
    .text-search-container {
      text-align: center;
      font-size: 20px;
      width: 90%;
    }
    .components-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 90%;
      height: 30vh;
    }
    .details-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
    .components-details-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .subtitle-details-container {
      font-size: 17px;
      margin-right: 15px;
    }
    .text-details-container {
      width: 90%;
      margin-bottom: 20px;
    }
    .actor-details-container,
    .review-details-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .review-details-container {
      margin-bottom: 20px;
    }
    .poster-details-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
  }
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;

    .content {
      width: 100%;
      max-width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2vh;
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
      margin-bottom: 2vh;
      color: #f5c50c;
    }
    .title-search-container {
      font-size: 1.6rem;
      text-align: center;
    }
    .text-search-container {
      text-align: center;
      font-size: 14px;
      width: 90%;
    }
    .components-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 90%;
      height: 30vh;
    }
    .details-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
    .components-details-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .subtitle-details-container {
      font-size: 17px;
      margin-right: 15px;
    }
    .text-details-container {
      width: 90%;
      margin-bottom: 20px;
    }
    .actor-details-container,
    .review-details-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .review-details-container {
      margin-bottom: 20px;
    }
    .poster-details-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
  }
`;
