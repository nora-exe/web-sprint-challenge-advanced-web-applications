// In Login.js, build all UI and state functionality needed to capture a username and password.
// Make sure that the input for your username and password includes the data-testid="username" and data-testid="password" attributes. These are needed for codegrade testing.
// Build in functionality that would allow an error to be displayed in the provided p tag if either the username or password is incorrect.
// Save the token to localStorage.

import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const initialValues = { username: "", password: "" };

const Login = () => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState('');

  const handleChanges = e => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
  };

  const handleSubmit = e => {
      e.preventDefault();
    if (formValues.username === 'Lambda School' && formValues.password === 'i<3Lambd4') {
      axios
          .post("http://localhost:5000/api/login", formValues)
          .then((res) => {
              window.localStorage.setItem('token', res.data.payload);
              push('/bubblepage');
          })
          .catch((err) => console.log(err.message));
    } else {
        setError("Username or Password not valid");
      }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            data-testid="username"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChanges}
          >
          </input>

          <label htmlFor="password">Password</label>
          <input            
            data-testid="password"
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
          >
          </input>

          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.