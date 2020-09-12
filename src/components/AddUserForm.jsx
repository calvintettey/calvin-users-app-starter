import React, { Component } from 'react';

export class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            users: []
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

        this.setState = {
            name: "",
            email:"",
          };
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <input 
                    type="text" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    />

                    <br />

                    <input 
                    type="email" 
                    placeholder="Email" 
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

export default AddUserForm;