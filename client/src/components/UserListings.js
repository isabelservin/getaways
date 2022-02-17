import React, { useEffect, useState } from "react";
import ListingTile from "./ListingTile";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const UserListings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const getAccount = async () => {
    const rep = await axios
      .post(`http://localhost:8080/api/v1/users/findUser`, {
        email: user.email,
      })
      .then((res) => {
        // console.log(res.data);
        return res.data;
      });
    console.log(rep);
  };

  const getListings = async () => {
    const email = await getAccount();
    const body = { ownerEmail: window.localStorage.getItem("email") };
    axios
      .post(`http://localhost:8080/api/v1/listings/userListings`, body)
      .then((res) => {
        setAllListings(res.data);
      });
  };

  useEffect(() => {
    //invoke method to fetch data from database
    getListings();
  }, []);

  const mapToListings = allListings.map((myListing) => {
    return (
      <ListingTile
        key={myListing._id}
        address={myListing.address}
        price={myListing.price}
        img={myListing.img}
        description={myListing.description}
        propertyType={myListing.propertyType}
      />
    );
  });

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Your Current Listings: </h1>
        {mapToListings}
      </div>
    )
  );
};

export default UserListings;
