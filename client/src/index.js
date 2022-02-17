//import react & DOM
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ejvpqz-k.us.auth0.com"
    clientId="9tAS6aIBAR40GqZgLV6FVToE340sCGMr"
    redirectUri="https://getaways-2022.herokuapp.com"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
