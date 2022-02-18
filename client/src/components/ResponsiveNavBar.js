import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Authentication/LogoutButton";

const ResponsiveNavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <input id="nav-toggle" type="checkbox"></input>
      <div class="logo">
        <a href="/home">
          G<strong>G</strong></a>
      </div>
      <ul class="links">
        <li>
          <a href="/home">Home</a>
        </li>

        <li>
          <a href="/bookings">Bookings</a>
        </li>

        <li>
          <a href="/listingform">Host</a>
        </li>

        <li>
          <a href="/userListings">MyListings</a>
        </li>

        <a>{isAuthenticated ? <LogoutButton /> : ""}</a>
      </ul>
      <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </nav>
  );
};

export default ResponsiveNavBar;
