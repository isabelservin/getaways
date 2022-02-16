import React from "react";
import Landing from "./Landing";
import UserForm from "./UserForm";
import ListingsForm from "./ListingsForm";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // return (
  //   <div id="main-container">
  //     <h3 id="site-name">Grand Getaways</h3>
  //     <img id="landing-img" src={travel} alt="suitcases" />
  //     <Listings />
  //   </div>

  // );

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/listingform" element={<ListingsForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
