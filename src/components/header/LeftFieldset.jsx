import Fieldset from "../../style/Fieldset";
import Title from "../../style/Title";
import Desc from "../../style/Desc";

export default function LeftFieldset({ userData }) {
  return (
    <Fieldset style={{ width: "630px", marginLeft: "20px" }}>
      <legend>Info</legend>
      <div>
        <Title>{`${userData.prefix} ${userData.name} ${userData.lastName}`}</Title>
      </div>
      <div>
        <Desc>{userData.title}</Desc>
      </div>
      <br />
      <div>
        <span>Email</span>: {userData.email}
      </div>
      <div>
        <span>Ip Address</span>: {userData.ip}
      </div>
      <div>
        <span>Ip Address</span>: {userData.ip}
      </div>
      <div>
        <span>Job Area</span>: {userData.jobArea}
      </div>
      <div>
        <span>Job Type</span>: {userData.jobType}
      </div>
    </Fieldset>
  );
}
