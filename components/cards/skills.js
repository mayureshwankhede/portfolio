import React from "react";
import { RoughNotation } from "react-rough-notation";
import { useSelector } from "react-redux";
const Skills = () => {
  const cardName = useSelector((state) => state.card.name);
  return (
    <div
      className={`bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow ${
        cardName == "skills" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-gray-900">
          <RoughNotation
            type="highlight"
            show={cardName == "skills" ? true : false}
            color="#ffff00"
          >
            Skills
          </RoughNotation>
        </h3>
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className=""></div>
      </div>
    </div>
  );
};

export default Skills;
