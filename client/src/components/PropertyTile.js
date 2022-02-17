import React from "react";

const PropertyTile = (props) => {
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src={props.img} />
          <span className="card-title">{props.propertyType}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyTile;
