import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="profile-box">
          <img src={user.picture} alt={user.name} className="profile-pic" />
          <h3 className="my-header">{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
