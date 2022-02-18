import React, { useState } from "react";
import { Link } from "react-router-dom";


const PropertyTile = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="col s12 m6">
      <Link to={`/${props.propertyType}/listings`}>
        <div className="card"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>

          <div className="card-image">
            <img src={props.img} />

            {isShown && (
              <span className="card-title">{props.propertyType}</span>
            )}

          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyTile;
