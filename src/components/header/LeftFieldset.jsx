import Fieldset from "../../style/Fieldset";
import Title from "../../style/Title";
import Desc from "../../style/Desc";
import Span from "../../style/Span";

export default function LeftFieldset({ userData }) {
  return (
    <Fieldset style={{ width: "100%" }}>
      <legend>Info</legend>
      <div>
        <Title>{`${userData.prefix} ${userData.name} ${userData.lastName}`}</Title>
      </div>
      <div>
        <Desc>{userData.title}</Desc>
      </div>
      <br />
      <div>
        <Span>Email</Span>: {userData.email}
      </div>
      <div>
        <Span>Ip Address</Span>: {userData.ip}
      </div>
      <div>
        <Span>Ip Address</Span>: {userData.ip}
      </div>
      <div>
        <Span>Job Area</Span>: {userData.jobArea}
      </div>
      <div>
        <Span>Job Type</Span>: {userData.jobType}
      </div>
    </Fieldset>
  );
}
