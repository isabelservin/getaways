import React, { useEffect, useState } from "react";
import ListingTile from "./ListingTile";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";

const Bookings = () => {
  //create state for retrieved listings
  const [allListings, setAllListings] = useState([]);
  const [email, setEmail] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
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
            (listing) => listing.ownerEmail !== email
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
    <div>
      <h1>Available Properties:</h1>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" {...register("title")} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" {...register("description")} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="start date" {...register("start date")} />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="end date" {...register("end date")} />
        </div>
        <button>Submit</button>
      </form>

      {mapToListings}
    </div>
  );
};

export default Bookings;
