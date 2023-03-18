import Title from "../style/Title";
import Desc from "../style/Desc";
import UserContainer from "../style/UserContainer";

export default function User({ user }) {
  return (
    <UserContainer>
      <img src={`${user.imageUrl}?v=${user.id}`} style={{ width: "100%" }} />
      <Title>{`${user.prefix} ${user.name} ${user.lastName}`}</Title>
      <Desc>{user.title}</Desc>
    </UserContainer>
  );
}
