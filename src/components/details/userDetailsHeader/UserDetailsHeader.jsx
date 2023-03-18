//import components
import LeftFieldset from "../../header/LeftFieldset";
import RightFieldset from "../../header/RightFieldset";

//import styles
import HeaderContainer from "../../../style/HeaderContainer";
import Image from "../../../style/Image";

//hooks
import useUserDetailsHeader from "./useUserDetailsHeader";

export default function UserDetailsHeader({ userId }) {
  const { userData } = useUserDetailsHeader(userId);

  return userData ? (
    <HeaderContainer>
      <Image src={`${userData.imageUrl}?v=${userId}`} />
      <LeftFieldset userData={userData} />
      <RightFieldset company={userData.company} address={userData.address} />
    </HeaderContainer>
  ) : null;
}
