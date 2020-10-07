import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";
import { logoutUser } from "./store/authActions";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.logoutUser}>Logout</button>
        <AddUserForm addNewUser={this.addNewUser} />
        <AllUsers allUsers={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
  users: state.usersState.users,
}};
 

export default connect(mapStateToProps, {logoutUser})(App);
