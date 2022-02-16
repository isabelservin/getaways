import React from "react";
import travel from "../images/travel.jpg";
import Listings from "./Listings";

const App = () => {
  return (
    <div id="main-container">
      <h3 id="site-name">Grand Getaways</h3>
      <img id="landing-img" src={travel} alt="suitcases" />
      <Listings />
    </div>
  );
};

export default App;
