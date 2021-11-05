import React from "react";
import Question from "./Question";

function QuestionList(props) {
  const { listIds, buttonText } = props;

  return (
    <div className="flex flex-col justify-center items-center container h-full p-5">
      <ul className="grid grid-cols-1 gap-4 md:gap-6 xl:gap-8">
        {listIds.length ? (
          listIds.map((id) => (
            <li key={id}>
              <Question id={id} buttonText={buttonText} />
            </li>
          ))
        ) : (
          <p className="font-bold text-xl text-center">
            No unanswered questions? Go ahead and answer one.
          </p>
        )}
      </ul>
    </div>
  );
}

export default QuestionList;
