import React from "react";
const ListingTile = (props) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={props.img} />
            <span className="card-title">
              {props.propertyType} for ${props.price}/day
            </span>
            <a className="btn-floating halfway-fab waves-effect waves-light orange darken-1 ">
              <i className="material-icons">+</i>
            </a>
          </div>
          <div className="card-content">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingTile;
