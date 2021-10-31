import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

function QuestionList(props) {
  console.log(props);
  return (
    <div className="flex flex-col justify-center items-center w-screen bg-pink-100">
      <h3 className="font-bold text-xl">Your Questions</h3>
      <ul>
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
