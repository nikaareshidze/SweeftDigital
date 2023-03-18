import { useParams } from "react-router-dom";

//import components
import UserDetailsFriends from "../../components//details/userDetailsFriends/UserDetailsFriends";
import UserDetailsHeader from "../../components/details/userDetailsHeader/UserDetailsHeader";
import UserHistory from "../../components/details/userHistory/UserHistory";

//import styles
import Container from "../../style/Container";

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
