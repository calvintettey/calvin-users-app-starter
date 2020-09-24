import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser } from "../store/allusersActions";

export class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
        }
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({name:"", email:""})
        console.log("submitted");

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
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

                    <button type="submit">Add To Users</button>

                </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    addUser: addUser
  };
export default connect(null, mapDispatchToProps)(AddUserForm);