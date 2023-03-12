import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destinations" element={<Destinations />} />
        <Route exact path="/crew" element={<Home />} />
        <Route exact path="/technology" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
