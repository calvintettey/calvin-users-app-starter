import React from 'react';

let User = (props) => {
    return (
        <div>
            <h1>{props.name} </h1>
            <h3>{props.email}</h3>
            <hr />
        </div>
    );
}

export default User;