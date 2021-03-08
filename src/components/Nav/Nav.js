import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <Link style={{ color: "white" }} to="/about">
          <li>About</li>
        </Link>
        <Link style={{ color: "white" }} to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
