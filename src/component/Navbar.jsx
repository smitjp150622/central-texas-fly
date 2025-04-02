import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container d-flex justify-content-between align-items-center bg-light p-3">
      <ul className="flex list-unstyled gap-3 w-100 justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
