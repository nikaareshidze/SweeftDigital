import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
