import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { addUser } from "./store/allusersActions";
import AddUserForm from './components/AddUserForm';
import AllUsers from "./components/AllUsers";


export  class App extends React.Component {


  addNewUser = (user) => {
    console.log("logging user", user)
    this.props.addUser(user)
  }

  render() {
    return (
      <div className="App">
        <AddUserForm addNewUser={this.addNewUser} />
        <AllUsers AllUsers={this.props.users} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.users
});

let mapDispatchToProps = {
  addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

