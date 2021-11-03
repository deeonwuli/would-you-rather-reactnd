import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-screen h-10 flex justify-center items-center space-x-5">
      <Link to="/">Home</Link>
      <Link to="/new-question">New Question</Link>
      <Link to="/">Leaderboard</Link>
    </div>
  );
}

export default Header;
