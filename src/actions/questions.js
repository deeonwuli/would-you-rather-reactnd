import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

function addAnswer({ id, answer, authedUser }) {
  return {
    type: ADD_ANSWER,
    answerInfo: {
      id,
      answer,
      authedUser,
    },
  };
}

export function handleAddAnswer(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({
      id,
      answer,
      authedUser,
    }).then(() =>
      dispatch(
        addAnswer({
          id: id,
          answer: answer,
          author: authedUser,
        })
      )
    );
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
