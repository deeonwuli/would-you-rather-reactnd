import React from "react";
import { connect } from "react-redux";

function Answered(props) {
  const { user, question, authedUser } = props;

  const { name, avatarURL } = user;
  const { optionOne, optionTwo } = question;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );
  const userChoiceOne = optionOne.votes.includes(authedUser);
  const userChoiceTwo = optionTwo.votes.includes(authedUser);

  return (
    <div className="flex justify-between items-center space-x-5">
      <div className="flex flex-col">
        <img src={avatarURL} className="h-32" alt={`Avatar of ${name}`} />
        <p className="font-bold text-center">{name} asks</p>
      </div>
      <div className="w-4/5 flex flex-col justify-center items-start space-y-3">
        <p className="italic font-medium text-xl">Results:</p>

        <div
          className={`shadow-xl px-10 py-3 w-full text-center rounded-xl ${
            userChoiceOne ? "bg-green-200" : ""
          }`}
        >
          <p>{optionOne.text}</p>
          <div className="shadow-md w-full bg-pink-100">
            <div
              className="bg-pink-600 border border-pink-600 text-xs leading-none py-2 rounded-lg"
              style={{ width: `${optionOnePercent}%` }}
            />
          </div>
          <p>
            {optionOne.votes.length}/{totalVotes}
          </p>
          {userChoiceOne ? (
            <p className="text-right font-bold">&#10003; Your vote</p>
          ) : null}
        </div>

        <div
          className={`shadow-xl px-10 py-3 w-full text-center rounded-xl ${
            userChoiceTwo ? "bg-green-200" : ""
          }`}
        >
          <p className="">{optionTwo.text}</p>
          <div className="shadow-md w-full bg-pink-100">
            <div
              className="bg-pink-600 border border-pink-600 text-xs leading-none py-2 rounded-lg"
              style={{ width: `${optionTwoPercent}%` }}
            />
          </div>
          <p>
            {optionTwo.votes.length}/{totalVotes}
          </p>
          {userChoiceTwo ? (
            <p className="text-right font-bold">&#10003; Your vote</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  return {
    question: question ? question : null,
    user: question ? users[question.author] : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(Answered);
