import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Authentication/LogoutButton";

const ResponsiveNavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <input id="nav-toggle" type="checkbox"></input>
      <div className="logo">
        <a href="/">
          G<strong>G</strong>
        </a>
      </div>
      <ul className="links">
        <li>{isAuthenticated ? <a href="/home">Home</a> : ""}</li>
        <li>{isAuthenticated ? <a href="/bookings">Booking</a> : ""}</li>
        <li>{isAuthenticated ? <a href="/listingform">Host</a> : ""}</li>
        <li>
          {isAuthenticated ? <a href="/userListings">My Listings</a> : ""}
        </li>
        <li>{isAuthenticated ? <LogoutButton /> : ""}</li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
};

export default ResponsiveNavBar;
