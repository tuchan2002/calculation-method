import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TuChan-K65J
        </Link>
        <div className="me-auto navbar-nav">
          <Link className="nav-link" to="/">
            Equation
          </Link>
          <Link className="nav-link" to="/system_of_equations">
            System Of Equations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
