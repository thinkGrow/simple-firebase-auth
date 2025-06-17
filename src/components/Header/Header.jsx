import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
