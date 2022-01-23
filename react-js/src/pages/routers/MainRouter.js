import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";


export default function MainRouter(props) {
  return (
    <Router>
      <div>
        {props.children}

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/home" exact >
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
