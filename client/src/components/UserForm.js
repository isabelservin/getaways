import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import hut from "../images/hut.jpg";

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
          console.log("response on log in " + res.data.name);
          console.log(res);
          let log = res.data ? true : false;
          console.log(log);
          //needs a conditional for when user has no name or number and redirects to userform else redirects to profile
          if (res.data) {
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
    <div className="container">
      <input type="checkbox" id="flip" />

      <div className="cover">
        <div className="front">
          <div className="text">
            <img src={hut} />
          </div>
        </div>
      </div>

      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Complete Your Profile</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>

                  <label htmlFor="name"></label>
                  <input
                    name="name"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-box">
                  <i className="fas fa-envelope"></i>

                  <label htmlFor="phoneNo"></label>
                  <input
                    name="phoneNo"
                    placeholder="Phone Number"
                    required
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
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
  );
};

export default UserForm;
