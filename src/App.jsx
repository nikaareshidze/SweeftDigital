import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

//components
import UserDatails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserDatails />} />
      </Routes>
    </Router>
  );
}

export default App;
