import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
  const nav = useNavigate();
  console.log(props);
  return (
    <button
      onClick={async (req, res) => {
        console.log("function hit");
        console.log(props.id);
        await axios
          .delete(
            "https://getaways-backend2022.herokuapp.com/api/v1/listings/delete",
            { data: { id: props.id } }
          )
          .then((res) => {
            console.log(res);
            nav("/userListings");
          });
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
