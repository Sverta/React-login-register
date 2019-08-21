import React, { Component } from 'react';
import '../styles/App.css';
import { Router, Route } from 'react-router-dom';
import RegisterForm from './login-registr/RegisterForm';
import LoginForm from './login-registr/LoginForm';
import HomePage from './home/HomePage';
import { history } from './history/history';
import HeaderNavbar from './header/navbar'
import PrivateRoute from './login-registr/auth'

class App extends Component {

  render() {
    console.log(this);
    return (
      <div className="App">
        <Router history={history}>
          <PrivateRoute exact path="/" component={HeaderNavbar} />
        </Router>
        <main className="App-body">
          <Router history={history}>
            {/* <Route path="/" component={LoginForm}> */}
              {/* <Route path="/" component={LoginForm} /> */}
           
              {/* <PrivateRoute path="/home" component={HomePage}/> */}
              {/* <Route path="/home" component={HomePage} /> */}
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <PrivateRoute exact path="/" component={HomePage} />
            {/* </Route> */}
          </Router>
          {/* <RegisterForm /> */}
        </main>
      </div>
    );
  }
}

export default App;