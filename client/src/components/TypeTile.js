import React from "react";

const TypeTile = (props) => {

    return (

        <div className="card small" id="property-type-box">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.img} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.address}<i class="material-icons right">more_vert</i></span>
                <p><a href="#">Book</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.address}<i class="material-icons right">close</i></span>
                <p>{props.desc}</p>
            </div>
        </div>
    )

}

export default TypeTile