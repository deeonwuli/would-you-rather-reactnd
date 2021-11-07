import React from "react";
import { resetAuthedUser } from "../actions/authedUser";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const { user, dispatch } = props;

  const logout = () => {
    dispatch(resetAuthedUser());
  };

  return (
    <div className="w-screen h-32 md:h-20 flex flex-col md:flex-row justify-between items-center shadow-xl p-5 mb-3">
      <div className="flex justify-between w-full md:w-1/4 order-2 md:order-1">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/add">
          New Question
        </NavLink>
        <NavLink activeClassName="active" to="/leaderboard">
          Leaderboard
        </NavLink>
      </div>
      <div className="flex justify-between md:justify-end items-center space-x-10 order-1 md:order-2 w-full mb-3 md:mb-0">
        <div className="flex items-center space-x-3">
          <p className="font-bold">{user.name}</p>
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className="h-16"
          />
        </div>
        <button
          className="flex space-x-2 bg-pink-500 text-white p-3 rounded-xl"
          onClick={logout}
        >
          <span className="border-r border-white pr-2 font-bold">Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <style jsx="true">
        {`
          .active {
            font-weight: 600;
            color: rgb(219, 39, 119);
          }
        `}
      </style>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Header);
