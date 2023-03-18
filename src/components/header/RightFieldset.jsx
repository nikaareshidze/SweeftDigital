import styled from "styled-components";

import Fieldset from "../../style/Fieldset";
import Title from "../../style/Title";
import Span from "../../style/Span";

export default function RightFieldset({ company, address }) {
  return (
    <ThisFieldset>
      <legend>Address</legend>
      <div>
        <Title>{`${company.name}${company.suffix}`}</Title>
      </div>

      <div>
        <Span>City</Span>: {address.city}
      </div>
      <div>
        <Span>Country</Span>: {address.country}
      </div>
      <div>
        <Span>State</Span>: {address.state}
      </div>
      <div>
        <Span>Street Address</Span>: {address.streetAddress}
      </div>
      <div>
        <Span>Zip</Span>: {address.zipCode}
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
