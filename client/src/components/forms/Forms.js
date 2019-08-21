import React, { Component } from 'react';
import { Input, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            surname: '',
            email: '',
            startDate: new Date(),
            response: []
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
        const data = { Firstname: this.state.firstname, Lastname: this.state.surname, Email: this.state.email, Date: this.state.date}

        e.preventDefault();
        await fetch('/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                // success
                this.setState({
                    firstname: '',
                    surname: '',
                    email: '',
                    date: '',
                    response: []
                });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                {/* form */}
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <p className="h4 text-center py-4">Sign up</p>
                                    <div className="grey-text">

                                        <Input
                                            label="Your name"
                                            icon="user"
                                            name='firstname'
                                            type="text"
                                            value={this.state.firstname}
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
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            name='email'
                                            value={this.state.email}
                                            onChange={e => this.handleChange(e)}
                                            validate
                                            error="wrong"
                                            success="right"
                                            required
                                        />
                                        <Input
                                            icon="calendar-alt"
                                            group
                                            type="date"
                                            name='date'
                                            value={this.state.date}
                                            onChange={e => this.handleChange(e)}
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Register
     </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="3"></MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default Forms;


