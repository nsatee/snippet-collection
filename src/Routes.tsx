import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache,
});

const Routes = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default Routes;
