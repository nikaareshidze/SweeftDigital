import { useState, useEffect } from "react";
import axios from "axios";

//import components
import LeftFieldset from "./header/LeftFieldset";
import RightFieldset from "./header/RightFieldset";

//import styles
import HeaderContainer from "../style/HeaderContainer";
import Image from "../style/Image";

export default function UserDetailsHeader({ userId }) {
  const [userData, setUserData] = useState({});
  const [company, setCompany] = useState({});
  const [address, setAddress] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
      )
      .then((response) => {
        setUserData(response.data);
        setCompany(response.data.company);
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <HeaderContainer>
      <Image src={`${userData.imageUrl}?v=${userId}`} />
      <LeftFieldset userData={userData} />
      <RightFieldset company={company} address={address} />
    </HeaderContainer>
  );
}
