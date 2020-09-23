import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./store/allusersActions";
import AddUserForm from "./components/AddUserForm";
import AllUsers from "./components/AllUsers";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUserForm addNewUser={this.addNewUser} />
        <AllUsers allUsers={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});


export default connect(mapStateToProps)(App);
