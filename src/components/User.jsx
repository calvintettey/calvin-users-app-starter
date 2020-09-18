import React from 'react';
import { Link } from "react-router-dom";

let User = ({ name, email, deleteUser, id, ...props}) => {
    let handleClick = () => {
        deleteUser(id)
    }
    return (
        <div>
            <h1>{props.name} </h1>
            <h3>{props.email}</h3>
            <button onClick={handleClick}>Delete User</button>
            <Link to={`/edit/${id}`}>Edit User</Link>
            <hr />
        </div>
    );
}

export default User;