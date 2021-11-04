import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

function Leaderboard(props) {
  const { userIds } = props;

  return (
    <div className="flex flex-col container items-center">
      <Header />

      <div className="flex flex-col justify-center rounded-lg shadow-xl w-full md:w-1/2 my-10 p-10 space-y-3">
        <p className="font-bold text-2xl border-b border-pink-600 py-2 mb-5">
          Leaderboard
        </p>
        <ul className="flex flex-col items-center space-y-10">
          {userIds.map((user) => (
            <li
              className="bg-pink-100 p-5 rounded-xl shadow-xl flex flex-col justify-center text-center h-40 w-4/5 px-5"
              key={user.id}
            >
              <div className="flex items-center justify-between">
                <img
                  src={user.avatar}
                  alt={`Avatar of ${user.name}`}
                  className="h-20"
                />
                <div className="border-l border-r border-gray-400 px-6 py-2">
                  <p className="text-xl font-bold">{user.name}</p>
                  <p className="font-bold italic text-sm text-pink-600">
                    Questions answered:{" "}
                    <span className="text-xl not-italic text-black">
                      {user.answered}
                    </span>{" "}
                  </p>
                  <p className="font-bold italic text-sm text-pink-600">
                    Questions created:{" "}
                    <span className="text-xl not-italic text-black">
                      {user.questioned}
                    </span>{" "}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-bold text-black">Score</p>
                  <span className="bg-pink-600 rounded-full text-white text-3xl px-7 py-5">
                    {user.score}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  const user = Object.keys(users).map((id) => ({
    id: id,
    name: users[id].name,
    avatar: users[id].avatarURL,
    questioned: users[id].questions.length,
    answered: Object.keys(users[id].answers).length,
    score: users[id].questions.length + Object.keys(users[id].answers).length,
  }));

  function compareObjects(object1, object2, key) {
    const obj1 = object1[key];
    const obj2 = object2[key];
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  }

  return {
    userIds: user.sort((user1, user2) => {
      return compareObjects(user1, user2, "score");
    }),
  };
}

export default connect(mapStateToProps)(Leaderboard);
