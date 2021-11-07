import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  const { authedUser } = props;
  return <div className="flex flex-col items-center">{!authedUser ? <Login /> : <ProtectedRoutes />}</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
