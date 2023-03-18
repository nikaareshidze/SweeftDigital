import { Link } from "react-router-dom";

//import styles
import GridContainer from "../../../style/GridContainer";

//import components
import User from "../../User";
import UserDetailsFriendsContainer from "../../../style/UserDetailsFriendsContainer";

//hook
import useUserDetailsFriends from "./useUserDetailsFriends";

export default function UserDetailsFriends({ userId }) {
  const { friends, addUserToHistory } = useUserDetailsFriends(userId);

  return (
    <UserDetailsFriendsContainer>
      <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>Friends:</h1>
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
    </UserDetailsFriendsContainer>
  );
}
