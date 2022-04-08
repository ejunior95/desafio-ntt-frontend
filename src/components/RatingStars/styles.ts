import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .icon-star {
    margin: 0px 5px 0px 5px;
  }
  .icon-star.full {
    color: yellow;
  }
  .icon-star.empty {
    color: white;
  }
`;
