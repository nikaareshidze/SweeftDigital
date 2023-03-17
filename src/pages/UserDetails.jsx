import { useParams } from "react-router-dom";

//import components
import UserDetailsFriends from "../components/UserDetailsFriends";
import UserDetailsHeader from "../components/UserDetailsHeader";
import UserHistory from "../components/UserHistory";

function UserDatails() {
  const { userId } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        border: "1px solid black",
        width: "1200px",
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
