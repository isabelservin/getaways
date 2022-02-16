import React, { useEffect, useState } from "react";

const Listings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);

  const getListings = async () => {
    try {
      const response = await fetch(
        "https://getaways-backend2022.herokuapp.com/api/v1/listings",
        { mode: "cors" }
      );
      console.log(response.ok);
      if (response.ok) {
        const responseBody = await response.json();
        console.log(responseBody);
        setAllListings(responseBody);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //invoke method to fetch data from database
    getListings();
  }, []);

  return <h1>Listings Component</h1>;
};

export default Listings;
