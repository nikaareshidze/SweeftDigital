import styled from "styled-components";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`;

export default HeaderContainer;
