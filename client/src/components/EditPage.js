import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const options = [
  { label: "House", value: "house" },
  { label: "Cabin", value: "cabin" },
  { label: "Condo", value: "condo" },
];

const EditPage = () => {
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [email, setEmail] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getEmail = () => {
      isAuthenticated ? setEmail(user.email) : setEmail("");
    };
    getEmail();
  }, [user, isAuthenticated, email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`
       ____Your Details____\n
       email: ${email},
       address: ${address},
       price: ${price},
       img: ${img},
       description: ${description},
       propertyType: ${propertyType},
       params: ${id}
    `);
    const listingObj = {
      id,
      ownerEmail: email,
      address,
      price,
      image: img,
      description,
      propertyType,
    };
    axios
      .put(
        `https://getaways-backend2022.herokuapp.com/api/v1/listings/edit`,
        listingObj
      )
      .then((res) => {
        console.log(res);
        navigate("/userListings");
      });
  };
  return (
    <>
      <h1>Edit Your Listing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img">Image</label>
          <input
            name="img"
            placeholder="Img Url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            rows="10"
            cols="10"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propertyType">Choose a Property Type:</label>
          <select
            value={propertyType}
            name="propertyType"
            onChange={(e) => setPropertyType(e.target.value)}
            style={{ display: "inline" }}
          >
            {options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button>Edit Listing</button>
        </div>
      </form>
    </>
  );
};

export default EditPage;
