import React from "react";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  return <Link to={`/editsPage/${props.id}`}>Edit</Link>;
};

export default EditButton;
