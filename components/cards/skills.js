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
        <div className="text-sm">
          <li className="pb-2">
            I use React & CSS (SASS) every day, and I try to keep up with the
            latest features while maintaining graceful degradation.I use
            JavaScript fairly often, usually with Typescript
          </li>

          <li className="pb-2">
            My main server-side language is Javascript (express) & PHP
            (laravel).Quite often paired with MySQL.
          </li>

          <li className="pb-2">
            I usually use WordPress for client sites, depending on requirements.
            I specialize in custom themes and have also built custom plugins for
            unique functionality.
          </li>
          <li className="pb-2">
            While pursuing Bachelors of Engineering I've developed Unity Games
            for iOS and Android apps using C# and published those games on play
            store.
          </li>
          <li className="pb-2">
            I learned ActionScript 3.0 in high school, when Flash was still
            ubiquitous and mobile devices were scarce. I created animation and
            games.
          </li>
          <li className="pb-2">
            I use Git for all of my programming work for random projects and
            contributions to other projects and primarily use VSCode for coding.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
