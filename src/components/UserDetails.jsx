import { useParams } from "react-router-dom";
import UserDetailsFriends from "./UserDetailsFriends";
import UserDetailsHeader from "./UserDetailsHeader";

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
        <UserDetailsFriends userId={userId} />
      </div>
    </div>
  );
}

export default UserDatails;
