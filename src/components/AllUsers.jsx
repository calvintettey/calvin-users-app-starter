import React from 'react';
import User from './User';

let AllUsers = (props) => {
    return (
        <>
            {props.AllUsers.map((user, index) => {
                return <User 
                    name={user.name} 
                    email={user.email} 
                    key={index}
                    id={user.id}
                    removeUser={this.deleteUser}
                />
            
            })}
        </>
    )
};

export default AllUsers;
