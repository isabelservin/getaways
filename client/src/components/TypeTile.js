import React from "react";

const TypeTile = (props) => {

    return (
        <div className="col s4">
            <div className="card lg">
                <div className="card-image waves-effect waves-block waves-light">
                    <img id="myimg" className="activator" src={props.img} />
                </div>

                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"><i id='expand-btn' className="material-icons right">+</i></span>
                    <p>{props.address}</p>
                </div>

                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i id='close-btn' className="material-icons right">x</i></span>
                    <p>{props.propertyType}</p>
                    <p>${props.price}/night</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

}

export default TypeTile