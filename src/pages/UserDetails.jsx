import { useParams } from "react-router-dom";

//import components
import UserDetailsFriends from "../components/UserDetailsFriends";
import UserDetailsHeader from "../components/UserDetailsHeader";
import UserHistory from "../components/UserHistory";

//import styles
import Container from "../style/Container";

function UserDetails() {
  const { userId } = useParams();

  return (
    <Container>
      <div style={{ width: "100%" }}>
        <UserDetailsHeader userId={userId} />
        <UserHistory />
        <UserDetailsFriends userId={userId} />
      </div>
    </Container>
  );
}

export default UserDetails;
