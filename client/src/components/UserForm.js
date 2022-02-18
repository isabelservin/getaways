import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getEmail = () => {
      isAuthenticated ? setEmail(user.email) : setEmail("");
    };
    const userLoggedIn = () => {
      axios
        .post(
          "https://getaways-backend2022.herokuapp.com/api/v1/users/findUser",
          { email }
        )
        .then((res) => {
          console.log(res);
          if (res) {
            navigate("/profile");
          }
        });
    };

    getEmail();
    userLoggedIn();
  }, [user, isAuthenticated, email]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const phoneNumber = phoneNo.replaceAll("-", "");
    console.log(`
          ____Your Details____\n
          Name : ${name}
          Phone No : ${phoneNo}
          Email: ${user.email}
        `);
    const userObj = { name, phoneNumber, email };
    axios
      .post(
        `https://getaways-backend2022.herokuapp.com/api/v1/users/new`,
        userObj
      )
      .then((res) => {
        console.log(res);
        setName("");
        setPhoneNo("");
        navigate("/profile");
      });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Finish Signing up to complete your Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            name="phoneNo"
            placeholder="Phone No"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
