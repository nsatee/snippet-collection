import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

const Routes = () => {
  return (
    <Route>
      <Switch>
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Route>
  );
};

export default Routes;
