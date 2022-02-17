import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phoneNo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const { name, phoneNo } = this.state;
    const { user } = this.props.auth0;
    event.preventDefault();
    const phoneNumber = phoneNo.replaceAll("-", "");
    console.log(`
      ____Your Details____\n
      Name : ${name}
      Phone No : ${phoneNo}
      Email: ${user.email}
    `);

    const userObj = { name, phoneNumber, email: user.email };
    axios
      .post(
        `https://getaways-backend2022.herokuapp.com/api/v1/users/new`,
        userObj
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
      <>
        <h1 style={{ textAlign: "center" }}>
          Finish Signing up to complete your Account
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              name="phoneNo"
              placeholder="Phone No"
              value={this.state.phoneNo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Create Account</button>
          </div>
        </form>
      </>
    );
  }
}

export default withAuth0(UserForm);
