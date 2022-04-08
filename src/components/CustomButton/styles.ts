import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1200px) {
    input:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-out;
    }
    input:active,
    div:active {
      transform: scale(0.9);
      transition: all 0.2s ease-out;
    }
    .primary {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #5a5a5a;
      color: #ffffff;
      transform: scale(1);
      transition: all 0.2s ease-out;
      padding: 8px 55px 8px 55px;
    }
    .fav-button {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #5a5a5a;
      color: #ffffff;
      transform: scale(1);
      transition: all 0.2s ease-out;
      padding: 8px 85px 8px 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    .text-fav-button {
      margin-right: 5px;
    }
    .icon-fav-button {
      font-size: 15px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    input:active,
    div:active {
      transform: scale(0.9);
      transition: all 0.2s ease-out;
    }
    .primary {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #5a5a5a;
      color: #ffffff;
      transform: scale(1);
      transition: all 0.2s ease-out;
      padding: 10px 0px 10px 0px;
      font-size: 15px;
      width: 100%;
    }
    .fav-button {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #5a5a5a;
      color: #ffffff;
      transform: scale(1);
      transition: all 0.2s ease-out;
      padding: 10px 0px 10px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      width: 100%;
    }
    .text-fav-button {
      margin-right: 5px;
    }
    .icon-fav-button {
      font-size: 15px;
    }
  }
`;
