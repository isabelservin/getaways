import React from "react";

const PropertyTile = (props) => {
    return(
        
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                <img src={props.img}/>
                <span class="card-title">{props.propertyType}</span>
                </div>
            </div>
        </div>
               

    )
}

export default PropertyTile;