//import react & DOM
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import UserForm from "./components/UserForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
    {/* <App /> */}
    <UserForm />
  </>,
  document.getElementById("root")
);
