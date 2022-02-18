import React from "react";
// import Landing from "./Landing";
import UserForm from "./UserForm";
import ListingsForm from "./ListingsForm";
import Profile from "./Profile";
import UserListings from "./UserListings";
// import NavBar from "./NavBar";
import TypeList from "./TypeList";
import Bookings from "./Booking";
import EditPage from "./EditPage";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashPage from "./SplashPage";

const App = () => {
  return (
    <>
      <ResponsiveNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/userListings" element={<UserListings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UserForm />} />
          <Route path="/listingform" element={<ListingsForm />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/:propertyType/listings" element={<TypeList />} />
          <Route path="/editsPage/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
