import React from "react";
import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router";

import Home from "./pages/Home";
import JobListing from "./pages/JobListing";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path="/job-listing/:id" component={JobListing} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
