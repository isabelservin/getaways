import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TypeTile from "./TypeTile";


const TypeList = (props) => {
    const [types, setTypes] = useState([])

    // console.log(useParams())
    const { propertyType } = useParams()

    const getPropertiesByType = async () => {
        try {
            const response = await fetch(`https://getaways-backend2022.herokuapp.com/api/v1/listings/${propertyType}`)
            if (response.ok) {
                const body = await response.json()
                console.log(body)
                setTypes(body)
            }

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPropertiesByType()
    }, [])

    const mappedTypes = types.map(type => {
        return (
            <TypeTile
                key={type._id}
                address={type.address}
                price={type.price}
                img={type.img}
                desc={type.description}
                propertyType={type.propertyType}

            />
        )
    })

    return (
        <>
            <h4>Types: ....</h4>
            <div class="row">
                <div class="col s12 m4">{mappedTypes}</div>
            </div>

        </>
    )
}

export default TypeList