import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSelector } from "react-redux";
import Link from "next/link";
const Projects = () => {
  const cardName = useSelector((state) => state.card.name);
  const cardRef = useRef();
  useEffect(() => {
    if (cardName == "projects") {
      cardRef.current.style.opacity = 0.5;
      cardRef.current.style.top = "-6px";
      setTimeout(() => {
        cardRef.current.style.opacity = 1;
        cardRef.current.style.top = "16px";
      }, 200);
    }
  }, [cardName]);

  return (
    <div
      ref={cardRef}
      className={`relative transform transition-all duration-150 ease-out  bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow ${
        cardName == "projects" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-gray-900 uppercase">
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
        <div className="flex flex-col justify-between p-2 md:flex-row">
          <div className="flex-[0_0_100%]    md:flex-auto md:mr-5 md:w-32">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff"
              alt=""
              srcSet=""
              className="rounded w-full "
            />
          </div>
          <div className="flex-[0_0_100%] mt-6 mb-3 md:flex-auto md:mt-0 md:w-64">
            <h3 className="font-bold ">
              <span className="pr-2">Similique</span>
            </h3>
            <p className="text-justify">
              Consequatur quidem deserunt qui fugit cumque ut esse est
              dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia
              exercitationem sed similique. Incidunt quae suscipit nihil
              deleniti. Possimus praesentium sunt aut tempora ut alias.
            </p>

            <div className="text-sm mt-3">
              <Link href="#">
                <a className="mr-2 my-1 border hover:bg-gray-100  font-bold py-2 px-4 ">
                  DEMO
                </a>
              </Link>
              <Link href="#">
                <a className="ml-2 my-1 border bg-gray-700 hover:bg-gray-900  text-white  font-bold py-2 px-4 ">
                  GITHUB
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
