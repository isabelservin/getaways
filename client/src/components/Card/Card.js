import React from "react";

export const Card = (props) => (
  <div className="Card">
    <img alt="listing" src={props.listing.email} />
    <h1>{props.listing.name}</h1>
    <h2>{props.listing.email}</h2>

    {/* {console.log(props.listing)} */}
  </div>
);
