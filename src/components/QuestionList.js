import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { CircularProgress } from "@material-ui/core";

function QuestionList(props) {
  console.log(props.questionIds)
  if (props.questionIds.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center text-pink-100">
        <CircularProgress color="inherit" size={100} />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center w-screen h-full p-5">
      <h3 className="font-bold text-xl">Your Questions</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {props.questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(QuestionList);