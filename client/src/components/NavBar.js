import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper black">
        <a href="#" className="brand-logo" id="logo-gg">
          GG
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add Listing</a>
          </li>
          <li>
            <a href="#.html">Booking</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
