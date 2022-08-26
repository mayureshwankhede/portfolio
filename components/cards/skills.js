import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSelector } from "react-redux";
import { SiJavascript, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
const Skills = () => {
  const cardName = useSelector((state) => state.card.name);
  const cardRef = useRef();
  useEffect(() => {
    if (cardName == "skills") {
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
      className={`relative transform transition-all duration-150 ease-out bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow ${
        cardName == "skills" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-gray-900 uppercase">
          <RoughNotation
            type="highlight"
            show={cardName == "skills" ? true : false}
            color="#ffff00"
          >
            Skills
          </RoughNotation>

          <span className="skills-icons ml-4 inline-block">
            <RoughNotation
              type="underline"
              show={cardName == "skills" ? true : false}
              color="#ff3b00"
            >
              <FaReact className="mr-1 inline-block" />
              <SiTypescript className="mr-1 inline-block" />
              <FaNodeJs className="mr-1 inline-block" />
              <DiMongodb className="mr-1 inline-block" />
              <DiMysql className="mr-1 inline-block" />
              <FaSass className="inline-block" />
            </RoughNotation>
          </span>
        </h3>
      </div>

      <div className="mt-4 px-4 pb-5 sm:px-6">
        <RoughNotationGroup show={cardName == "skills" ? true : false}>
          <div className="text-sm">
            <li className="pb-2">
              I use{" "}
              <RoughNotation type="highlight" color="#ce93d8">
                <span className="font-bold">React & CSS (SASS)</span>
              </RoughNotation>{" "}
              every day, and I try to keep up with the latest features while
              maintaining graceful degradation. I use
              <RoughNotation type="highlight" color="#F7DF1E">
                <span className="font-bold">JavaScript</span>
              </RoughNotation>{" "}
              fairly often, usually with{" "}
              <RoughNotation type="highlight" color="#0099ff">
                <span className="font-bold">TypeScript</span>
              </RoughNotation>{" "}
            </li>

            <li className="pb-2">
              My main server-side language is
              <RoughNotation type="highlight" color="#63985E">
                <span className="font-bold">Javascript (express)</span>
              </RoughNotation>
              {" & "}
              <RoughNotation type="highlight" color="#7a7ed5" multiline={true}>
                <span className="font-bold">PHP (laravel)</span>
              </RoughNotation>
              . Quite often paired with{" "}
              <RoughNotation type="highlight" color="#bcbcbc">
                <span className="font-bold">MySQL & MongoDB.</span>
              </RoughNotation>{" "}
            </li>

            <li className="pb-2">
              <RoughNotation type="highlight" color="#00aeea">
                <span className="font-bold">
                  {" "}
                  I usually use WordPress for client sites
                </span>
              </RoughNotation>
              , depending on requirements. I specialize in custom themes and
              have also built custom plugins for unique functionality.
            </li>
            <li className="pb-2">
              <RoughNotation type="highlight" color="#ce93d8" multiline={true}>
                <span>
                  While pursuing Bachelors of Engineering I've{" "}
                  <span className="font-bold">
                    {" "}
                    developed Unity Games for iOS and Android apps
                  </span>{" "}
                </span>
              </RoughNotation>
              using C# and published those games on play store.
            </li>
            <li className="pb-2">
              I learned
              <RoughNotation type="circle" color="#ff3b00">
                <span className="font-bold"> ActionScript 3.0 </span>
              </RoughNotation>
              in high school, when Flash was still ubiquitous and mobile devices
              were scarce.{" "}
              <RoughNotation type="underline" color="#ff3b00" multiline={true}>
                <span className="font-bold">I created miniclip games.</span>
              </RoughNotation>
            </li>
            <li className="pb-2">
              I use{" "}
              <RoughNotation type="highlight" color="#ff7052">
                <span className="font-bold"> Git </span>
              </RoughNotation>{" "}
              for all of my programming work , random projects and contributions
              to other projects and primarily use{" "}
              <RoughNotation type="highlight" color="#008dff" multiline={true}>
                <span className="font-bold"> VSCode for coding.</span>
              </RoughNotation>{" "}
            </li>
          </div>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Skills;
