import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden bg-pink-100">
      <div className="h-2/3 w-3/4  lg:w-1/2 xl:w-1/4 border-2 border-pink-400 bg-white rounded-2xl flex flex-col items-center justify-center">
        <img
          src="/images/login.png"
          width="100"
          height="100"
          alt="sign in girl"
        />
        <p className="font-bold text-xl py-5">Would you Rather?</p>
        <form className="flex flex-col">
          <label className="text-lg font-medium pb-3" htmlFor="users">
            Select your user
          </label>
          <select
            className="border-2 border-pink-200 rounded-md px-2"
            name="users"
          >
            <option className="appearance-none" value="1">
              1
            </option>
            <option className="appearance-none" value="2">
              2
            </option>
            <option className="appearance-none" value="3">
              3
            </option>
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

export default connect()(App);
