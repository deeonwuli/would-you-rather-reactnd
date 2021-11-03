import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div className="flex items-center justify-center">
      <Home />
    </div>
  );
}

export default connect()(App);
