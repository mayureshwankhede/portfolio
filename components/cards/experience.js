import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSelector } from "react-redux";
const Experience = () => {
  const cardName = useSelector((state) => state.card.name);
  const cardRef = useRef();
  useEffect(() => {
    if (cardName == "experience") {
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
      className={`relative transform transition-all duration-150 ease-out bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow  ${
        cardName == "experience" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-bold text-gray-900 uppercase">
          <RoughNotation
            type="highlight"
            show={cardName == "experience" ? true : false}
            color="#ffff00"
          >
            Experience
          </RoughNotation>
          <span>
            {" "}
            <RoughNotation
              type="circle"
              show={cardName == "experience" ? true : false}
              color="#ff3b00"
            >
              4+
            </RoughNotation>
          </span>
        </h3>
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <h5 className="font-bold">Simple Split Inc | Full Stack Developer</h5>
        <h6 className="text-sm underline">March 2022 - Present | Ottawa, ON</h6>
        <li className="text-sm">
          Worked on API Integration (Stripe | Twilio | MailChimp | GMaps )
        </li>
        <li className="text-sm">Worked on PWA, JWT, AWS (EC2, S3 Bucket)</li>
      </div>
      <div className="px-4 pb-5 sm:px-6">
        <h5 className="font-bold">Gratitude India | Tech Lead Developer</h5>
        <h6 className="text-sm underline">
          August 2018 - April 2021 | Mumbai, India
        </h6>
        <li className="text-sm">
          Responsible for the team management and sprint using GIRA.
        </li>
        <li className="text-sm">
          Solved roadblocks and issues when the team can't see a way out
        </li>
        <li className="text-sm">
          API Integration (SendGrid | Messenger | GMaps | Twilio )
        </li>
        <li className="text-sm">
          Worked on ReactJs, Laravel, blade, Lodash, JWT
        </li>
      </div>
      <div className="px-4 pb-5 sm:px-6">
        <h5 className="font-bold">
          Sub Promotions India | Jr. Frontend Developer
        </h5>
        <h6 className="text-sm underline">
          February 2017 - July 2018 | Mumbai, India
        </h6>
        <li className="text-sm">
          Developed templates in HTML, CSS, Javascript for wordpress from
          scratch and worked on SEO marketing with the help of Google Analytics
        </li>
      </div>
    </div>
  );
};

export default Experience;
