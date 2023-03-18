import axios from "axios";
import { useEffect, useState } from "react";

export default function useUserDetailsHeader(userId) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
      )
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return {
    userData,
  };
}
