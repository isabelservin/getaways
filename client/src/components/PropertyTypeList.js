import React, { useState, useEffect } from "react";
import PropertyTile from "./PropertyTile";

const PropertyTypeList = (props) => {
    //create state for retrieve all property types   
    const [allProperties, setAllProperties] = useState([]);

    //helper function that triggers our fetch to the db
    const fetchPropertyTypes = async () => {
        try {
            const result = await fetch("https://getaways-backend2022.herokuapp.com/api/v1/types");
            if (result.ok) {
                const resultBody = await result.json();
                console.log(resultBody)
                setAllProperties(resultBody);
            }
        } catch (error) { console.log(error) };
    };

    //triggers our fetch on load
    useEffect(() => {
        //invoke fetch
        fetchPropertyTypes()
    }, [])

    const mapPropertyType = allProperties.map(type => {
        return (
            <PropertyTile
                key={type._id}
                propertyType={type.propertyType}
                img={type.img}
            />
        )
    })

    return (
        <div className="property-container">
            <div class="row">
                <div class="col s12 ">{mapPropertyType}</div>
            </div>
        </div>
    )

}

export default PropertyTypeList;