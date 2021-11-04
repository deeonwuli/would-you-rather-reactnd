import React, { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

function Login(props) {
  const [value, setValue] = useState("sarahedo");

  const { usernames } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;

    if (event.target.value !== "") {
      dispatch(setAuthedUser(value));
    }
  };

  if (!usernames) {
    return (
      <div className="flex h-screen items-center justify-center text-pink-100">
        <CircularProgress color="inherit" size={100} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden bg-pink-100">
      <div className="h-2/3 w-3/4  lg:w-1/2 xl:w-1/4 border-2 border-pink-400 bg-white rounded-2xl flex flex-col items-center justify-center">
        <img
          src="/images/login.png"
          width="100"
          height="100"
          alt="sign in girl"
        />
        <p className="font-bold text-xl pt-5">Would you Rather?</p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            className="text-lg font-medium py-3 text-center italic"
            htmlFor="users"
          >
            Select a user
          </label>
          <select
            className="border-b border-pink-600 bg-white pb-2 px-5 text-center focus:outline-none font-bold"
            name="users"
            value={value}
            onChange={handleChange}
          >
            {usernames.map((username) => (
              <option
                className="appearance-none"
                value={username.id}
                key={username.id}
              >
                {username.user}
              </option>
            ))}
          </select>
          <button
            className="bg-pink-600 text-white font-bold rounded-lg my-5 py-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    usernames: Object.keys(users).map((id) => ({
      id: id,
      user: users[id].name,
    })),
  };
}

export default connect(mapStateToProps)(Login);
