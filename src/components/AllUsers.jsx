import React from "react";
import User from "./User";
import { connect } from "react-redux";
import { deleteUser } from "../store/allusersActions";
import { logRoles } from "@testing-library/react";

const AllUsers = (props) => {
  return (
    <>
      {props.allUsers.map((user) => {
          console.log("all users", props.allUsers)
        return (
          <User
            name={user.name}
            email={user.email}
            key={user.id}
            id={user.id}
          />
        );
      })}
    </>
  );
};

export default AllUsers;
