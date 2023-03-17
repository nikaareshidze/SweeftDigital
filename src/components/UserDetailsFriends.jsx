import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import styles
import GridContainer from "../style/GridContainer";

//import components
import User from "./User";

export default function UserDetailsFriends({ userId }) {
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(1);

  const getFriendsData = (friends, page) => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/20`
      )
      .then((response) => {
        setFriends([...friends, ...response.data.list]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // setFriends([]);
    // setPage(1);
    getFriendsData([], 1);
  }, [userId]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => {
        getFriendsData(friends, prevPage + 1);
        return prevPage + 1;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{ marginLeft: "10px", marginTop: "20px", marginBottom: "20px" }}
      >
        Friends
      </h1>
      <GridContainer>
        {friends.map((friend) => (
          <Link to={`/user/${friend.id}`} key={`${friend.name}-${friend.id}`}>
            <User user={friend} />
          </Link>
        ))}
      </GridContainer>
    </div>
  );
}
