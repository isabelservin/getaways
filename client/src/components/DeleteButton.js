import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
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
          .then((res) => console.log(res));
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
