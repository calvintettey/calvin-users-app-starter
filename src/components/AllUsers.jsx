import React from 'react';
import User from './User';

const AllUsers = (props) => {
    return (
        <>
            {props.AllUsers.map((user, index, deleteUser) => {
                return <User 
                    name={user.name} 
                    email={user.email} 
                    key={index}
                    id={user.id}
                    removeUser={deleteUser}
                />
            
            })}
        </>
    )
};

export default AllUsers;
