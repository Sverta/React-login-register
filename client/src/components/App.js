import React from 'react';
import '../styles/App.css';
import { Router, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <main className="App-body">
        <Router history={history}>
          <Route path="/" component={App}>
            <Route exact path="/" component={LoginForm} />
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Route>
        </Router>
        {/* <RegisterForm /> */}
      </main>
    </div>
  );
}

export default App;