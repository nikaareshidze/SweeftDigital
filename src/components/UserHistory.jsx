import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserHistory() {
  const { history } = useSelector((state) => state.historySlice);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
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
    </div>
  );
}
