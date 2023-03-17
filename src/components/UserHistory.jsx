import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserHistory() {
  const { history } = useSelector((state) => state.historySlice);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {history.map((i) => (
        // key is needed
        <Link to={i.url}>
          <p style={{ textDecoration: "underline" }}>
            {i.name}
            <span>{` > `}</span>
          </p>
        </Link>
      ))}
    </div>
  );
}
