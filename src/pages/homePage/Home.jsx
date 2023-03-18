import { Link } from "react-router-dom";

//hooks
import useHome from "./useHome";

//components
import User from "../../components/User";

//styles
import GridContainer from "../../style/GridContainer";
import Container from "../../style/Container";

function Home() {
  const { users } = useHome();

  return (
    <Container>
      <GridContainer>
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <User user={user} />
          </Link>
        ))}
      </GridContainer>
    </Container>
  );
}

export default Home;
