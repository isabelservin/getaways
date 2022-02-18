import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import house from "../images/house.jpg";

const options = [
  { label: "House", value: "house" },
  { label: "Cabin", value: "cabin" },
  { label: "Condo", value: "condo" },
];

const ListingsForm = () => {
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [email, setEmail] = useState("");
  const { user, isAuthenticated } = useAuth0();

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
       
    `);
    const listingObj = {
      ownerEmail: email,
      address,
      price,
      img,
      description,
      propertyType,
    };
    axios
      .post(
        `https://getaways-backend2022.herokuapp.com/api/v1/listings/new`,
        listingObj
      )
      .then((res) => {
        console.log(res);
        if (res) {
          navigate("/userListings");
        }
      });
  };

  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state

  return (
    // <form onSubmit={this.handleSubmit}>
    //   <div>
    //     <label htmlFor="address">Address</label>
    //     <input
    //       name="address"
    //       placeholder="address"
    //       value={this.state.address}
    //       onChange={this.handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="price">Price</label>
    //     <input
    //       name="price"
    //       placeholder="price"
    //       value={this.state.price}
    //       onChange={this.handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="img">Image</label>
    //     <input
    //       name="img"
    //       placeholder="Img Url"
    //       value={this.state.img}
    //       onChange={this.handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="description">Description</label>
    //     <input
    //       type="textarea"
    //       rows="10"
    //       cols="10"
    //       name="description"
    //       placeholder="description"
    //       value={this.state.description}
    //       onChange={this.handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="propertyType">Choose a Property Type:</label>
    //     <select
    //       value={this.state.propertyType}
    //       name="propertyType"
    //       onChange={this.handleChange}
    //       style={{ display: "inline" }}
    //     >
    //       {options.map((option, idx) => (
    //         <option key={idx} value={option.value}>
    //           {option.label}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <div>
    //     <button>Add Listing</button>
    //   </div>
    // </form>

    // STYLES
    <section>
      <div className="container" id="host">
        <input type="checkbox" id="flip" />

        <div className="cover">
          <div className="front">
            <div className="text">
              <img src={house} />
            </div>
          </div>
        </div>

        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Host A Property</div>
              <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>

                    <label htmlFor="address"></label>
                    <input
                      name="address"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-envelope"></i>

                    <label htmlFor="price"></label>
                    <input
                      name="price"
                      placeholder="Price Per Night"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-envelope"></i>

                    <label htmlFor="img"></label>
                    <input
                      name="img"
                      placeholder="Image Url"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-envelope"></i>

                    <input
                      type="textarea"
                      rows="10"
                      cols="10"
                      name="description"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-envelope"></i>

                    <label htmlFor="propertyType">Property Type:</label>
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
                </div>

                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsForm;
