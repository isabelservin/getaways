//import react & DOM
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import UserForm from "./components/UserForm";
import ListingsForm from "./components/ListingsForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="users" element={<UserForm />} />
        <Route path="listings" element={<ListingsForm />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
