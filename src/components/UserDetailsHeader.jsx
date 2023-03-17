import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { historyActions } from "../store/historySlice";

//import components
import LeftFieldset from "./header/LeftFieldset";
import RightFieldset from "./header/RightFieldset";

//import styles
import HeaderContainer from "../style/HeaderContainer";

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
    <HeaderContainer>
      <img src={`${userData.imageUrl}?v=${userId}`} width="267" height="200" />
      <LeftFieldset userData={userData} />
      <RightFieldset company={company} address={address} />
    </HeaderContainer>
  );
}
