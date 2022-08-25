import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSelector } from "react-redux";
const Projects = () => {
  const cardName = useSelector((state) => state.card.name);

  return (
    <div
      className={` bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow ${
        cardName == "projects" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-gray-900">
          <RoughNotation
            type="highlight"
            show={cardName == "projects" ? true : false}
            color="#ffff00"
          >
            Projects
          </RoughNotation>
        </h3>
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className="flex justify-between p-2">
          <div className="  flex-auto w-64 pr-5">
            <h3 className="font-bold ">
              <span className="pr-2">Similique</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </h3>
            <p className="text-justify">
              Consequatur quidem deserunt qui fugit cumque ut esse est
              dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia
              exercitationem sed similique. Incidunt quae suscipit nihil
              deleniti. Possimus praesentium sunt aut tempora ut alias.
            </p>
          </div>
          <div className=" flex-auto w-32  ">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff"
              alt=""
              srcSet=""
              className="rounded"
            />
          </div>
        </div>

        <div className="flex justify-between p-2">
          <div className="  flex-auto w-64 pr-5">
            <h3 className="font-bold ">
              <span className="pr-2">Similique</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </h3>
            <p className="text-justify">
              Consequatur quidem deserunt qui fugit cumque ut esse est
              dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia
              exercitationem sed similique. Incidunt quae suscipit nihil
              deleniti. Possimus praesentium sunt aut tempora ut alias.
            </p>
          </div>
          <div className=" flex-auto w-32  ">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff"
              alt=""
              srcSet=""
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
