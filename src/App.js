import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/Home";
import Place from "./src/Place";
import MainNav from "./src/Nav/MainNav";

function App() {
  return (
    <>
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Place/:id" element={<Place />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
