import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Route } from "react-router";
import NewTweet from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import QuestionPage from "./QuestionPage";

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
      <Route path="/questions/:id">
        <QuestionPage />
      </Route>
      <Route path="/leaderboard">
        <Leaderboard />
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
