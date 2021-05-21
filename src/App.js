// build the backend to the logout button. When pressed, the authentication token within localStorage should be removed.

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from "./components/BubblePage";
import "./styles.scss";

const onClick = () => {
  window.localStorage.removeItem('token');
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={onClick}>logout</a>
        </header> 

        <Switch>
          <Route exactPath="/">
            <Login />
          </Route>
          <PrivateRoute path="/bubblepage" component={BubblePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.