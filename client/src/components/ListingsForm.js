import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import house from "../images/house.jpg"

const options = [
  { label: "House", value: "house" },
  { label: "Cabin", value: "cabin" },
  { label: "Condo", value: "condo" },
];

class ListingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      price: "",
      img: "",
      description: "",
      propertyType: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const { user } = this.props.auth0;
    const { address, price, img, description, propertyType } = this.state;
    event.preventDefault();
    console.log(`
      ____Your Details____\n
      email: ${user.email},
      address: ${address},
      price: ${price},
      img: ${img},
      description: ${description},
      propertyType: ${propertyType}
    `);
    const listingObj = {
      ownerEmail: user.email,
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
      });
  }

  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state

  render() {
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
      < section >
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
                <form onSubmit={this.handleSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>

                      <label htmlFor="address"></label>
                      <input
                        name="address"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="input-box">
                      <i className="fas fa-envelope"></i>

                      <label htmlFor="price"></label>
                      <input
                        name="price"
                        placeholder="Price Per Night"
                        value={this.state.price}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="input-box">
                      <i className="fas fa-envelope"></i>


                      <label htmlFor="img"></label>
                      <input
                        name="img"
                        placeholder="Image Url"
                        value={this.state.img}
                        onChange={this.handleChange}
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
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="input-box">
                      <i className="fas fa-envelope"></i>

                      <label htmlFor="propertyType">Property Type:</label>
                      <select
                        value={this.state.propertyType}
                        name="propertyType"
                        onChange={this.handleChange}
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
      </section >
    );
  }
}

export default withAuth0(ListingsForm);
