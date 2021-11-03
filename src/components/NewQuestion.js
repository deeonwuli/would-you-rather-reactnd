import React, { useState } from "react";
import Header from "../components/Header";

function NewTweet() {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleChange1 = (event) => {
    setOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setOption2(event.target.value);
  };

  const handleSubmit = (event) => {
   // go back home
  }

  return (
    <div className="flex flex-col container items-center">
      <Header />

      <div className="flex flex-col justify-center rounded-lg shadow-xl w-1/2 my-10 p-10 space-y-3">
        <p className="font-semibold border-b border-pink-600 py-2">
          Complete the question:
        </p>
        <form className="flex flex-col items-center space-y-3" onSubmit={handleSubmit}>
          <p className="italic font-bold text-xl">Would you rather...</p>
          <input
            type="text"
            placeholder="Enter option one"
            value={option1}
            onChange={handleChange1}
            autoFocus
            className="border-b border-pink-600 w-2/3 text-center focus:outline-none"
          />
          <p className="text-center">or</p>
          <input
            type="text"
            placeholder="Enter option two"
            value={option2}
            onChange={handleChange2}
            className="border-b border-pink-600 w-2/3 text-center focus:outline-none"
          />
          <button className="bg-pink-600 text-white font-bold rounded-lg px-5 py-2 flex justify-center" type="submit" disabled={!option1 || !option2}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewTweet;
