import React, { useState } from "react";
import Header from "./Header";
import QuestionList from "./QuestionList";

export default function Home() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-wrap justify-center items-center w-full md:w-1/2">
      <Header />
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mx-5"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`font-bold px-5 py-3 shadow-lg rounded block leading-normal
                ${
                  openTab === 1
                    ? "text-white bg-pink-600"
                    : "text-pink-600 bg-white"
                }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Unanswered
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`font-bold px-5 py-3 shadow-lg rounded block leading-normal
                ${
                  openTab === 2
                    ? "text-white bg-pink-600"
                    : "text-pink-600 bg-white"
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Answered
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <QuestionList />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p className="font-bold text-xl text-center">
                  No unanswered questions? Go ahead and answer one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
