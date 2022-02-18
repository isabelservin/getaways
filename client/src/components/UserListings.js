import React, { useEffect, useState } from "react";
import ListingTile from "./ListingTile";
import { useAuth0 } from "@auth0/auth0-react";

const UserListings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);
  const [email, setEmail] = useState("");
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    //invoke method to fetch data from database
    const getEmail = () => {
      isAuthenticated ? setEmail(user.email) : setEmail("pnnroman92@gmail.com");
    };
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
          const res = responseBody.filter(
            (listing) => listing.ownerEmail === email
          );
          setAllListings(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEmail();
    getListings();
  }, [email, isAuthenticated, user]);

  const mapToListings = allListings.map((myListing) => {
    console.log(myListing._id);
    return (
      <>
        <ListingTile
          key={myListing._id}
          id={myListing._id}
          address={myListing.address}
          price={myListing.price}
          img={myListing.img}
          description={myListing.description}
          propertyType={myListing.propertyType}
        />

      </>
    );
  });

  return (
    <div className="row user-listing-container">
      {mapToListings}
    </div>
  );
};

export default UserListings;
