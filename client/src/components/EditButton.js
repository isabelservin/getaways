import React from "react";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  return <Link to={`/editsPage/${props.id}`} className="waves-effect waves-light btn light-blue lighten-3">Edit</Link>;
};

export default EditButton;
