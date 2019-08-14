import React, { Component } from 'react';
import { Input, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        const data = { login: this.state.login, password: this.state.password}

        e.preventDefault();
        let r = await fetch('/members');
        console.log(r);
        let members = await r.json();
        let memLeng = members.length;
        let compare = false;
        
        for(var i = 0; i < memLeng; i++){
            if (data.login === members[i].login && data.password === members[i].password) {
                compare = true;
            }
        }
    //   console.log(compare)
        if(compare) { 
            this.setState({ fireRedirect: true })
        } else {
            this.setState({
                login: '',
                password: ''
            });
        }
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
                                    <p className="h4 text-center py-4">Login</p>
                                    <div className="grey-text">

                                        <Input
                                            label="Your login"
                                            icon="user"
                                            name='login'
                                            type="text"
                                            value={this.state.login}
                                            onChange={e => this.handleChange(e)}
                                            required />

                                        <Input
                                            label="Your password"
                                            icon="key"
                                            type="text"
                                            name='password'
                                            value={this.state.password}
                                            onChange={e => this.handleChange(e)}
                                            required />
                                    </div>
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                                        Forgot
                                        <a href="#!" className="blue-text ml-1">
                                            Password?
                                        </a>
                                    </p>
                                    <div className="text-center mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Login
                                        </MDBBtn>
                                        <p className="font-small grey-text d-flex justify-content-end">
                                            Not a member?
                                            <Link to="/register" className="blue-text ml-1">Register</Link>
                                        </p>
                                    </div>
                                </form>
                                {fireRedirect && (
                                    <Redirect to={from || '/home'} />
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

export default LoginForm;


