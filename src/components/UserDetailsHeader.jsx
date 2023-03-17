import { useState, useEffect } from "react";
import axios from "axios";

//import styles
import Fieldset from "../style/Fieldset";
import Title from "../style/Title";
import Desc from "../style/Desc";

import { useDispatch } from "react-redux";
import { historyActions } from "../store/historySlice";

export default function UserDetailsHeader({ userId }) {
  const [userData, setUserData] = useState({});
  const [company, setCompany] = useState({});
  const [address, setAddress] = useState({});

  const dispatch = useDispatch();
  const setHistory = (payload) => {
    dispatch(historyActions.setHistory(payload));
  };

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
      )
      .then((response) => {
        setUserData(response.data);
        setCompany(response.data.company);
        setAddress(response.data.address);
        setHistory({
          name: `${response.data.prefix} ${response.data.name} ${response.data.lastName}`,
          url: `/user/${userId}`,
          id: response.data.id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={`${userData.imageUrl}?v=${userId}`} width="267" height="200" />

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
    </div>
  );
}
