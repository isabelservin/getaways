import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", phoneNo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const { email, name, phoneNo } = this.state;
    event.preventDefault();
    console.log(`
      ____Your Details____\n
      Email : ${email}
      Name : ${name}
      Phone No : ${phoneNo}
    `);
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
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
    );
  }
}

export default UserForm;
