import Fieldset from "../../style/Fieldset";
import Title from "../../style/Title";

export default function RightFieldset({ company, address }) {
  return (
    <Fieldset style={{ margin: "2px", padding: "12px" }}>
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
    </Fieldset>
  );
}
