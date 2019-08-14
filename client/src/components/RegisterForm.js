import React, { Component } from 'react';
import { Input, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            login: '',
            password: '',
            fireRedirect: false
        };
    }
    //  control function that gets triggered when the input control element's value changes. 
    // The function then updates the state of the parent component and passes the new value through the value prop.
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 

    // submit form and put data to mysql
    handleSubmit = async e => {
        const data = { name: this.state.name, surname: this.state.surname, login: this.state.login, password: this.state.password }

        e.preventDefault();
        await fetch('/postMembers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                // success
                this.setState({ fireRedirect: true })
            })
            .catch(err => console.log(err))

    }

    render() {
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                {/* form */}
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <p className="h4 text-center py-4">Sign In</p>
                                    <div className="grey-text">
                                        <Input
                                            label="Your name"
                                            icon="user-shield"
                                            type="text"
                                            name='name'
                                            value={this.state.name}
                                            onChange={e => this.handleChange(e)}
                                            required />
                                        <Input
                                            label="Your surname"
                                            icon="user-shield"
                                            type="text"
                                            name='surname'
                                            value={this.state.surname}
                                            onChange={e => this.handleChange(e)}
                                            required />
                                        <Input
                                            label="Your login"
                                            icon="user-secret"
                                            name='login'
                                            type="text"
                                            value={this.state.login}
                                            onChange={e => this.handleChange(e)}
                                            required />

                                        <Input
                                            label="Your password"
                                            icon="key"
                                            type="password"
                                            name='password'
                                            value={this.state.password}
                                            onChange={e => this.handleChange(e)}
                                            required />
                                    </div>
                                    <div className="text-center mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Register
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        <Link to="/login" className="blue-text ml-1">Login</Link>
                                    </p>

                                </form>
                                {fireRedirect && (
                                    <Redirect to={from || '/login'} />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3"></MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default RegisterForm;


