import React, { useEffect } from "react";
import QuestionList from "./QuestionList"
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <QuestionList />
  );
}

export default connect()(App);
