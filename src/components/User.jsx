import React from 'react';
import { Link } from "react-router-dom";

const User = ({ name, email, removeUser, id, ...props}) => {
    const handleClick = () => {
        removeUser(id)
      }
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
            <button onClick={handleClick}>Delete User</button>
            <button><Link to={`/edit/${id}`}>Edit user</Link></button>
            <hr />
        </div>
    );
}

export default User;