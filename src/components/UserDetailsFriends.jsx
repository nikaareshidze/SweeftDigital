import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { historyActions } from "../store/historySlice";

//import styles
import GridContainer from "../style/GridContainer";

//import components
import User from "./User";

export default function UserDetailsFriends({ userId }) {
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const setHistory = (payload) => {
    dispatch(historyActions.setHistory(payload));
  };

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

  const addUserToHistory = (friend) => {
    setHistory({
      name: `${friend.prefix} ${friend.name} ${friend.lastName}`,
      url: `/user/${friend.id}`,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>Friends</h1>
      <GridContainer style={{ marginTop: "10px" }}>
        {friends.map((friend) => (
          <Link
            to={`/user/${friend.id}`}
            key={`${friend.name}-${friend.id}`}
            onClick={() => {
              addUserToHistory(friend);
            }}
          >
            <User user={friend} />
          </Link>
        ))}
      </GridContainer>
    </div>
  );
}
