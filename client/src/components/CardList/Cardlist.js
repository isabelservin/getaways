import React from "react";
import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = (props) => (
  <div className="CardList">
    {props.listings.map((listing) => (
      <Card key={listing.id} listing={listing} />
    ))}
  </div>
);
