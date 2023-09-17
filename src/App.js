import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./components/Screens/Places";
// import Place from "./components/Screens/Place";

function App() {
  return (
    <>
      <Router>
        <Places />
      </Router>
    </>
  );
}

export default App;
