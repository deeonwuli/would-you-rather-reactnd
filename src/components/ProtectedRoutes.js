import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Page404 from "./404page";

export default function ProtectedRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions/:id" component={QuestionPage} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}
