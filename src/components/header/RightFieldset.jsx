import styled from "styled-components";

import Fieldset from "../../style/Fieldset";
import Title from "../../style/Title";

export default function RightFieldset({ company, address }) {
  return (
    <ThisFieldset>
      <legend>Address</legend>
      <div>
        <Title>{`${company.name}${company.suffix}`}</Title>
      </div>

      <div>
        <span>City</span>: {address.city}
      </div>
      <div>
        <span>Country</span>: {address.country}
      </div>
      <div>
        <span>State</span>: {address.state}
      </div>
      <div>
        <span>Street Address</span>: {address.streetAddress}
      </div>
      <div>
        <span>Zip</span>: {address.zipCode}
      </div>
    </ThisFieldset>
  );
}

const ThisFieldset = styled(Fieldset)`
  width: 100%;
  padding: 12px;

  @media (max-width: 768px) {
    grid-column: 1/3;
  }
  @media (max-width: 567px) {
    grid-column: auto;
  }
`;
