import Title from "../style/Title";
import Desc from "../style/Desc";
import UserContainer from "../style/UserContainer";

export default function User({ user }) {
  return (
    <UserContainer>
      <img src={`${user.imageUrl}`} height="208.5" width="278" />
      <Title>{`${user.prefix} ${user.name} ${user.lastName}`}</Title>
      <Desc>{user.title}</Desc>
    </UserContainer>
  );
}
