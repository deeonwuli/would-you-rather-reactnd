import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Route } from "react-router";
import NewTweet from "./NewQuestion";
import Login from "./Login";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  const { authedUser } = props;

  return (
    <div className="flex items-center justify-center">
      {!authedUser ? (
        <Route exact path="/">
          <Login />
        </Route>
      ) : (
        <Route exact path="/">
          <Home />
        </Route>
      )}
      <Route path="/new-question">
        <NewTweet />
      </Route>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
