import React from "react";
const ListingTile = (props)=> {
    return(
        <div class="row">
            <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                <img src={props.img}/>
                <span class="card-title">{props.propertyType} for ${props.price}/day</span>
                <a class="btn-floating halfway-fab waves-effect waves-light orange darken-1 "><i className ="material-icons">+</i></a>
                </div>
                <div class="card-content">
                <p>{props.description}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ListingTile;