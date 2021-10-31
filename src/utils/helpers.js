export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    hasAnswered: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser),
  };
}
