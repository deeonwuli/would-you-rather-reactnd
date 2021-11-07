import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";

function Unanswered(props) {
  const [selected, setSelected] = useState();

  const { user, question, dispatch } = props;
  if (question === null) return <Redirect to="/404" />;
  const { name, avatarURL } = user;
  const { optionOne, optionTwo, id } = question;

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleSubmit = (id, event) => {
    event.preventDefault();
    if (selected !== "") {
      dispatch(handleAddAnswer(id, selected));
    }
  };

  return (
    <div className="flex justify-between items-center">
      <img src={avatarURL} className="h-32" alt={`Avatar of ${name}`} />
      <div className="w-4/5 flex flex-col justify-center items-center">
        <p className="font-bold text-xl">{name} asks</p>
        <form
          className="flex flex-col justify-center items-center text-lg"
          onSubmit={(event) => handleSubmit(id, event)}
        >
          <label>
            <input
              name="option"
              type="radio"
              value="optionOne"
              className="mr-3"
              onChange={handleChange}
            />
            <span>{optionOne.text}</span>
          </label>
          <p>or</p>
          <label>
            <input
              name="option"
              type="radio"
              value="optionTwo"
              className="mr-3"
              onChange={handleChange}
            />
            <span>{optionTwo.text}</span>
          </label>
          <button
            className="bg-pink-600 text-white font-bold rounded-lg px-5 py-2 mt-5 flex w-full justify-center"
            type="submit"
            disabled={!selected}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    user: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(Unanswered);
