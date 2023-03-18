import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//styles
import UserHistoryContainer from "../../../style/UserHistoryContainer";

export default function UserHistory() {
  const { history } = useSelector((state) => state.historySlice);

  return (
    <UserHistoryContainer>
      {history.map((item, i) => (
        <Link to={item.url} key={`${item.name}-${i}`}>
          <span style={{ textDecoration: "underline", color: "indigo" }}>
            {item.name}
          </span>
          {i !== history.length - 1 ? (
            <span style={{ padding: "5px" }}>{`>`}</span>
          ) : (
            ""
          )}
        </Link>
      ))}
    </UserHistoryContainer>
  );
}
