import React from "react";
import Landing from "./Landing";
import UserForm from "./UserForm";
import ListingsForm from "./ListingsForm";
import Profile from "./Profile";
import UserListings from "./UserListings";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/userListings" element={<UserListings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/listingform" element={<ListingsForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
