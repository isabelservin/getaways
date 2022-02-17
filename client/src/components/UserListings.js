import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const UserListings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);
  const { user } = useAuth0();

  const getListings = async () => {
    try {
      const { data: response } = await axios.get(
        `http://localhost:8080/api/v1/listings/userListings?email=${user.email}`
      );
      setAllListings(response);
    } catch (err) {
      console.log(err);
    }
  };

  //   const getListings = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/api/v1/listings/userListings`,
  //         { mode: "cors" }
  //       );
  //       console.log(response.ok);
  //       if (response.ok) {
  //         const responseBody = await response.json();
  //         console.log(responseBody);
  //         setAllListings(responseBody);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    //invoke method to fetch data from database
    getListings();
  }, []);

  return <h1>Your current Listings: </h1>;
};

export default UserListings;
