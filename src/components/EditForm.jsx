import React, { Component } from 'react';
import { connect  } from "react-redux";
import { editUser } from "../store/allusersActions";

export class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            email:props.user.email,
        };
        this.id = props.match.params.id
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state)
        this.setState({name:"", email:""})

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

                    <button type="submit">Edit User</button>

                </form>
            </>
        )
    }
}

let mapStateToProps = (state, ownProps) => {{
    user: state.users.find(user => user.id === ownProps.match.params.id)
}}

let mapDispatchToProps = {
    editUser
}

export default connect(mapStateToProps, mapDispatchToProps) (EditForm);