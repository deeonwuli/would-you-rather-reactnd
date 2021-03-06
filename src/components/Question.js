import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Link } from "react-router-dom";

function Question(props) {
  const { question, buttonText } = props;

  if (question === null) {
    return <p>This question does not exist!</p>;
  }

  const { name, avatar, optionOne, id } = question;

  return (
    <div className="bg-pink-100 my-5 p-5 rounded-xl shadow-xl flex flex-col justify-center text-center h-52 md:w-96">
      <div className="flex items-center justify-between">
        <img src={avatar} alt={`Avatar of ${name}`} className="h-20 w-1/5" />
        <div className="w-4/5">
          <p>
            <span className="font-bold italic">{name}</span> asks:
          </p>
          <p>Would you rather?</p>
          <p>
            <span className="font-bold text-xl">{optionOne}</span> or...
          </p>
        </div>
      </div>
      <Link to={`/questions/${id}`} className="flex justify-center">
        <button className="bg-pink-600 text-white font-bold rounded-lg mt-5 py-2 w-full flex justify-center">
          <span>{buttonText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
