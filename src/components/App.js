import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Route } from "react-router"
import NewTweet from "./NewQuestion";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div className="flex items-center justify-center">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/new-question">
        <NewTweet />
      </Route>
    </div>
  );
}

export default connect()(App);
