import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/allusersActions";
import { connect } from "react-redux";

const User = ({ name, email, deleteUser, id, ...props }) => {
  const handleClick = () => {
    deleteUser(id);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <button onClick={handleClick}>Delete User</button>
      <button>
          <Link to={`/edit/${id}`}>Edit User</Link>
      </button>
      <hr />
    </div>
  );
};

export default connect(null, { deleteUser })(User);
