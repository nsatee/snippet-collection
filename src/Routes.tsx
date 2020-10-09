import React from "react";
import { Route, Switch } from "wouter";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getStories: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache,
});

const Routes = () => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/:section" component={Main} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </ApolloProvider>
  );
};

export default Routes;
