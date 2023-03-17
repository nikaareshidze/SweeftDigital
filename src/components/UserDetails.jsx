import { useParams } from "react-router-dom";
import UserDetailsFriends from "./UserDetailsFriends";
import UserDetailsHeader from "./UserDetailsHeader";
import UserHistory from "./UserHistory";

function UserDatails() {
  const { userId } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        border: "1px solid black",
      }}
    >
      <div>
        <UserDetailsHeader userId={userId} />
        <UserHistory />
        <UserDetailsFriends userId={userId} />
      </div>
    </div>
  );
}

export default UserDatails;
