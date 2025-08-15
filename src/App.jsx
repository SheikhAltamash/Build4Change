import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ProblemStatements from "./pages/ProblemStatements";
import GitHubSubmission from "./pages/GitHubSubmission";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          {/* <Route path="/problems" element={<ProblemStatements />} />
          <Route path="/submit" element={<GitHubSubmission />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
