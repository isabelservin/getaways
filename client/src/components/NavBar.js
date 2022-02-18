import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Authentication/LogoutButton";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <div className="nav-wrapper black">
        <a href="#" className="brand-logo" id="logo-gg">
          GG
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#.html">Home</a>
          </li>
          <li>
            <a href="/listingform">Add Listing</a>
          </li>
          <li>
            <a href="/userListings">Your Listings</a>
          </li>
          <li>
            <a href="/bookings">Bookings</a>
          </li>
          <li>{isAuthenticated ? <LogoutButton /> : ""}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
