import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Equation from "./pages/Equation";
import SystemOfEquations from "./pages/SystemOfEquations";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Equation />} />
          <Route path="/system_of_equations" element={<SystemOfEquations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
