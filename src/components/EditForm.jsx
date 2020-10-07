import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../store/allusersActions";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
    };
    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
    };
    console.log(updatedInfo);

    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      email: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <br />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <br />

          <button type="submit">Edit User</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.usersState.users.find((user) => user.id === ownProps.match.params.id),
  };
};

const mapDispatchToProps = {
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
