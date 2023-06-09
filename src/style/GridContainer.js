import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  width: 100%;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 567px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default GridContainer;
