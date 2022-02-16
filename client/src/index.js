//import react & DOM
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import UserForm from "./pages/UserForm";
import ListingsForm from "./pages/ListingsForm";
import ListingsPage from "./pages/ListingsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="users" element={<UserForm />} />
        <Route path="listings" element={<ListingsForm />} />
        <Route path="listingsPage" element={<ListingsPage />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
