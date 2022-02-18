import React from "react";
import travel from "../images/travel.jpg";
import Listings from "./Listings";
import LoginButton from "./Authentication/LoginButton";
import LogoutButton from "./Authentication/LogoutButton";
import Properties from "./Properties";

const Landing = () => {
  return (
    <div>
      <div>
        <section className="showcase">
          <img src={travel} alt="suitcases" />
        </section>
        <Properties />
      </div>

    </div>
  );
};

export default Landing;
