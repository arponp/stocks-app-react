import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <h1>Stocks</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
