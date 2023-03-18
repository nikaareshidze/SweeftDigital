import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { historyActions } from "../../../store/historySlice";
import axios from "axios";

export default function useUserDetailsFriends(userId) {
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
  return { friends, addUserToHistory };
}
