import React, { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import Header from "../components/Header";
import { Redirect } from "react-router";

function NewTweet(props) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [goHome, setGoHome] = useState(false);

  const handleChange1 = (event) => {
    setOptionOne(event.target.value);
  };

  const handleChange2 = (event) => {
    setOptionTwo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setOptionOne("");
    setOptionTwo("");
    setGoHome(true);
  };

  if (goHome === true) {
    return <Redirect to="/" />
  }

  return (
    <div className="flex flex-col container items-center">
      <Header />

      <div className="flex flex-col justify-center rounded-lg shadow-xl w-full md:w-1/2 my-10 p-10 space-y-3">
        <p className="font-semibold border-b border-pink-600 py-2">
          Complete the question:
        </p>
        <form
          className="flex flex-col items-center space-y-3"
          onSubmit={handleSubmit}
        >
          <p className="italic font-bold text-xl">Would you rather...</p>
          <input
            type="text"
            placeholder="Enter option one"
            value={optionOne}
            name="optionOne"
            onChange={handleChange1}
            autoFocus
            className="border-b border-pink-600 md:w-2/3 text-center focus:outline-none"
          />
          <p className="text-center">or</p>
          <input
            type="text"
            placeholder="Enter option two"
            value={optionTwo}
            name="optionTwo"
            onChange={handleChange2}
            className="border-b border-pink-600 md:w-2/3 text-center focus:outline-none"
          />
          <button
            className="bg-pink-600 text-white font-bold rounded-lg px-5 py-2 flex justify-center"
            type="submit"
            disabled={!optionOne || !optionTwo}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default connect()(NewTweet);
