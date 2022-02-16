//import react & DOM
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserForm from "./components/UserForm";
import ListingsForm from "./components/ListingsForm";
import ListingsPage from "./components/ListingsPage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UserForm />} />
        <Route path="/listings" element={<ListingsForm />} />
        <Route path="listingsPage" element={<ListingsPage />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
