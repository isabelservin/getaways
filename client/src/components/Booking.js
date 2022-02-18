import React, { useEffect, useState } from "react";
import ListingTile from "./ListingTile";
import { useAuth0 } from "@auth0/auth0-react";
// import { useForm } from "react-hook-form";

const Bookings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);
  const [email, setEmail] = useState("");
  const { user, isAuthenticated } = useAuth0();
  // const { register, handleSubmit } = useForm();
  // const handleRegistration = (data) => console.log(data);

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
        if (response.ok) {
          const responseBody = await response.json();
          const res = responseBody.filter(
            (listing) => listing.ownerEmail !== email
          );
          setAllListings(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getRentals = async () => {
      try {
        const response = await fetch(
          "https://getaways-backend2022.herokuapp.com/api/v1/rentals",
          { mode: "cors" }
        );
        if (response.ok) {
          const responseBody = await response.json();

          const recordIds = responseBody.map((rental) => rental.listingRecord);
          let intersection = allListings.filter((x) => {
            return recordIds.includes(x._id);
          });
          let intersectionArray = intersection.map((x) => x._id);
          const eligibleRentals = allListings.filter((res) => {
            return !intersectionArray.includes(res._id);
          });
          console.log(eligibleRentals);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEmail();
    getListings();
    getRentals();
  }, [email, isAuthenticated, user]);

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

  return (
    <div className="row user-listing-container">

      {mapToListings}

    </div>
  );
};

export default Bookings;
