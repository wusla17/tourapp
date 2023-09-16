import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/Nav/MainNav";
import Places from "./components/Screens/Places";
import Place from "./components/Screens/Place";

function App() {
  return (
    <>
      <Router>
        <MainNav />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
