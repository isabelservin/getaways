import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [name, setName] = useState("");

  useEffect(() => {
    const userLoggedIn = () => {
      axios
        .post(
          "https://getaways-backend2022.herokuapp.com/api/v1/users/findUser",
          { email: user.email }
        )
        .then((res) => {
          console.log("response on log in " + res.data.name);
          console.log(res);
          let log = res.data ? true : false;
          console.log(log);
          //needs a conditional for when user has no name or number and redirects to userform else redirects to profile
          if (res.data) {
            setName(res.data.name);
          }
        });
    };
    userLoggedIn();
  }, [user, name]);

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="profile-box">
          <img src={user.picture} alt={user.name} className="profile-pic" />
          <h3 className="my-header">{name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
