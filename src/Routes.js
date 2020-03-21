import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/Notfound/NotFound";
import Login from "./components/Login/Login";
import Signup from "./containers/Signup";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      {/* <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} /> */}
      { /* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}