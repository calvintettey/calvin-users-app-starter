import React, { Component } from 'react';

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
        this.props.addNewUser(this.state)
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

export default AddUserForm;