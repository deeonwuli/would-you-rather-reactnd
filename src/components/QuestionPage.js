import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Unanswered from "./Unanswered";
import Answered from "./Answered";

function QuestionPage(props) {
  const { answers } = props;
  const { id } = useParams();

  return (
    <div className="flex flex-col container items-center">
      <Header />

      <div className="flex flex-col justify-center rounded-lg shadow-xl w-full md:w-1/2 my-10 p-10 space-y-3">
        <p className="font-bold text-2xl border-b border-pink-600 py-2 mb-5">
          Would you rather?
        </p>
        {answers.hasOwnProperty(id) ? <Answered id={id} /> : <Unanswered id={id} />}
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  const answers = users[authedUser].answers;
  return {
    answers,
  };
}

export default connect(mapStateToProps)(QuestionPage);
