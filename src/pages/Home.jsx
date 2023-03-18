import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import User from "../components/User";

//styles
import GridContainer from "../style/GridContainer";
import Container from "../style/Container";

function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
      )
      .then((response) => {
        setUsers([...users, ...response.data.list]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

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
